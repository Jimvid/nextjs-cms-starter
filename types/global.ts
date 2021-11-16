export interface ImageProps {
  id: string
  url: string
  width: number
  height: number
  formats: {
    small: {
      url: string
    }
    medium: {
      url: string
    }
    large: {
      url: string
    }
  }
}
