import img5 from '../../../assets/images/man5.webp'

import img from '../../../assets/images/MAN.webp'
import img2 from '../../../assets/images/man2.webp'
import img3 from '../../../assets/images/man3.webp'
import img4 from '../../../assets/images/man4.webp'
import { colors } from '../../../theme'
import { CategoryCardData, GalleryCardData, ImageBgSectionData, SimpleCardsDataProps } from '../types'

export const headingSectionCards: SimpleCardsDataProps[] = [
    {
      id: 1,
      type: 'full',
      heading: {
        type: 'large',
        text: ['card Title'],
        size: 'xl',
        color: colors.textLight,
      },
      textContent: {
        size: '14px',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus mollitia hic impedit laboriosam',
        color: colors.textLight,
      },
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'void',
        },
        text: 'view more',
      },
    },
    {
      id: 2,
      type: 'full',
      heading: {
        type: 'large',
        text: ['card Title'],
        size: 'xl',
        color: colors.textLight,
      },
      textContent: {
        size: '14px',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus mollitia hic impedit laboriosam',
        color: colors.textLight,
      },
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'void',
        },
        text: 'view more',
      },
    },
    {
      id: 3,
      type: 'full',
      heading: {
        type: 'large',
        text: ['card Title'],
        size: 'xl',
        color: colors.textLight,
      },
      textContent: {
        size: '14px',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus mollitia hic impedit laboriosam',
        color: colors.textLight,
      },
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'void',
        },
        text: 'view more',
      },
    },
  ]

export const galaryCardsProps: GalleryCardData[] = [
    {
      id: 1,
      type: 'side',
      image: img5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur qui hic quos in',
      title: 'Card title',
      textColor: colors.bgDark,
      titleColor: colors.bgDarkHov,
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'control',
        },
        text: 'view more',
      },
    },
    {
      id: 2,
      type: 'main',
      image: img5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur qui hic quos in',
      title: 'Card title',
      textColor: colors.bgDark,
      titleColor: colors.bgDarkHov,
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'control',
        },
        text: 'view more',
      },
    },
    {
      id: 3,
      type: 'side',
      image: img5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur qui hic quos in',
      title: 'Card title',
      textColor: colors.bgDark,
      titleColor: colors.bgDarkHov,
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'control',
        },
        text: 'view more',
      },
    },
    {
      id: 4,
      type: 'side',
      image: img5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur qui hic quos in',
      title: 'Card title',
      textColor: colors.bgDark,
      titleColor: colors.bgDarkHov,
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'control',
        },
        text: 'view more',
      },
    },
    {
      id: 5,
      type: 'side',
      image: img5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur qui hic quos in',
      title: 'Card title',
      textColor: colors.bgDark,
      titleColor: colors.bgDarkHov,
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'control',
        },
        text: 'view more',
      },
    },
  ]

export const imageSectionCardProps: ImageBgSectionData = {
    card: {
      id: 1,
      type: 'opacity',
      heading: {
        type: 'large',
        text: ['Lorem ipsum dolor, sit amet consectetur adipisicing'],
        size: 'xl',
        color: colors.textLight,
      },
      textContent: {
        size: '14px',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus mollitia hic impedit laboriosam',
        color: colors.textLight,
      },
      button: {
        onClick: () => {},
        type: {
          variant: 'click',
          color: 'void',
        },
        text: 'view more',
      },
    },
    chain: {
      type: 'chain',
      text: ['card Title', 'card Title', 'card Title', 'card Title'],
      size: '16px',
      color: colors.BrownAcent,
    },
  }

export const imageCardsProps: CategoryCardData[] = [
    {
      id: 1,
      type: 'full',
      image: img,
      textContent: {
        text: 'n web development, you may often feel the need to add transparent backgrounds.' +
        'Searching for the transparent background property in CSS will not give you any' +
        'results as there is no such transparent-background property. However, you can' +
        'use alternative properties or the transparent color code for the same purpose.',
      },
      mainHeader: {
        size: 'lg',
        text: ['Product big image card']
      },
      chainHeader: {
        size: 'sm',
        text: [
          'My title card',
          'super card',
          'mega card',
          'extra card',
        ]
      },
      button: {
        type: {
          variant: 'click',
          color: 'sckelet',
        },
        onClick: () => {},
        text:"view more"
      }
    },
    {
      id: 2,
      type: 'full',
      image: img2,
      textContent: {
        text: 'n web development, you may often feel the need to add transparent backgrounds.' +
        'Searching for the transparent background property in CSS will not give you any' +
        'results as there is no such transparent-background property. However, you can' +
        'use alternative properties or the transparent color code for the same purpose.',
      },
      mainHeader: {
        size: 'lg',
        text: ['Product big image card']
      },
      chainHeader: {
        size: 'sm',
        text: [
          'My title card',
          'super card',
          'mega card',
          'extra card',
        ]
      },
      button: {
        type: {
          variant: 'click',
          color: 'sckelet',
        },
        onClick: () => {},
        text:"view more"
      }
    },
    {
      id: 3,
      type: 'full',
      image: img3,
      textContent: {
        text: 'n web development, you may often feel the need to add transparent backgrounds.' +
        'Searching for the transparent background property in CSS will not give you any' +
        'results as there is no such transparent-background property. However, you can' +
        'use alternative properties or the transparent color code for the same purpose.',
      },
      mainHeader: {
        size: 'lg',
        text: ['Product big image card']
      },
      chainHeader: {
        size: 'sm',
        text: [
          'My title card',
          'super card',
          'mega card',
          'extra card',
        ]
      },
      button: {
        type: {
          variant: 'click',
          color: 'sckelet',
        },
        onClick: () => {},
        text:"view more"
      }
    },
    {
      id: 4,
      type: 'full',
      image: img4,
      textContent: {
        text: 'n web development, you may often feel the need to add transparent backgrounds.' +
        'Searching for the transparent background property in CSS will not give you any' +
        'results as there is no such transparent-background property. However, you can' +
        'use alternative properties or the transparent color code for the same purpose.',
      },
      mainHeader: {
        size: 'lg',
        text: ['Product big image card']
      },
      chainHeader: {
        size: 'sm',
        text: [
          'My title card',
          'super card',
          'mega card',
          'extra card',
        ]
      },
      button: {
        type: {
          variant: 'click',
          color: 'sckelet',
        },
        onClick: () => {},
        text:"view more"
      }
    },
  ]