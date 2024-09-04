import { ButtonFubric } from "../../../components/Button"

export interface SimpleCardsDataProps {
    type: string
  heading: {
    type: string
    text: string[]
    size: string
    color: string
  }
  textContent: {
    size: string
    text: string
    color: string
  }
  button: ButtonFubric
  id: number
}

export interface GalleryCardData {
    type: string
    image: string
    id: number
    text: string
    textColor: string
    title: string
    titleColor: string
    button: ButtonFubric
}

export interface CategoryCardData {
    type: string
    image: string
    id: number
    textContent: {
      size?: string,
      text: string,
      colror?: string,
    },
    mainHeader: {
      size?: string,
      text: string[],
      color?: string
    },
    chainHeader: {
      size?: string,
      text: string[],
      color?: string,
    },
    button: ButtonFubric
  }

export interface HeaderChainData { 
    data: HeadingsFuctoryProps; 
    id: number;
}

export interface GalleryChainData {
    chain: HeadingsFuctoryProps
    large: HeadingsFuctoryProps
    id: number
}

export interface ImageBgSectionData {
    card: SimpleCardsDataProps
    chain: HeadingsFuctoryProps
  }