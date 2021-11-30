import React, { useState, useEffect, useRef, MutableRefObject } from "react"
import Overlay from "components/atoms/overlay"
import ReactDOM from "react-dom"
import S from "./modal.module.scss"

const Modal = (p: ModalProps) => {
  if (typeof window === "undefined") return null

  const container: HTMLBodyElement | null = document.querySelector("body")
  const modalRef = useRef() as MutableRefObject<HTMLInputElement>
  const [firstTabableEl, setFirstTabableEl] = useState<HTMLElement>()
  const [lastTabableEl, setLastTabableEl] = useState<HTMLElement>()

  // Used to animate after mount
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // Used mount component
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    // Handle tab press so focused element stays inside modal.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") p.closeModal(e)

      if (document.activeElement === firstTabableEl) {
        if (e.key === "Tab" && e.shiftKey) {
          e.preventDefault()
          lastTabableEl?.focus()
        }
      } else if (document.activeElement === lastTabableEl) {
        if (e.key === "Tab" && !e.shiftKey) {
          e.preventDefault()
          firstTabableEl?.focus()
        }
      }
    }

    // Set ref in a variable as 'current' will change on every rerender.
    const modalRefCurrent = modalRef.current

    // Find first and last tabable elements.
    if (modalRefCurrent) {
      const tabableSelectors =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
      const tabableEls: NodeListOf<HTMLElement> =
        modalRefCurrent.querySelectorAll(tabableSelectors)
      setFirstTabableEl(tabableEls[0])
      setLastTabableEl(tabableEls[tabableEls.length - 1])

      // Set focus to first tabable element in modal.
      tabableEls[0].focus()
    }

    // Add event listener to Tab pressed.
    if (modalRefCurrent) {
      modalRefCurrent?.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      modalRefCurrent?.removeEventListener("keydown", handleKeyDown)
    }
  }, [modalRef, p.isOpen, p, firstTabableEl, lastTabableEl])

  useEffect(() => {
    if (p.isOpen) {
      setIsMounted(true)
      // Let component mount before transitioning component
      //   setTimeout(() => setIsOpen(true), 160)
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    } else {
      setIsOpen(false)
      document.body.style.overflow = ""
      // Wait 560ms for reveal animation to end
      //   setTimeout(() => setIsMounted(false), 560)
      setIsMounted(false)
    }
  }, [p.isOpen])

  const onModalClick = (e: any) => {
    e.stopPropagation()
  }

  return isMounted
    ? ReactDOM.createPortal(
        <Overlay handleClick={p.closeModal}>
          <div
            className={S.modal}
            style={{ ...p.styles }}
            role="dialog"
            aria-modal={true}
            aria-label={p.title}
            ref={modalRef}
            onClick={onModalClick}
          >
            <button
              className={S.closeModal}
              onClick={p.closeModal}
              aria-label={p.closeDialogLabel}
            />
            <>{p.children}</>
          </div>
        </Overlay>,
        container!
      )
    : null
}

export default Modal

interface ModalProps {
  isOpen: boolean
  closeModalColor?: string
  closeModal: (e: any) => void
  children: JSX.Element
  styles?: {}
  title: string
  closeDialogLabel: string
}
