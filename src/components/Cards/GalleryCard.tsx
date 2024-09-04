import { Box, Flex, Image } from '@chakra-ui/react'


export interface GalleryCardProps{
    image: string
    type: string
    children: JSX.Element | JSX.Element[],
    borderColor?: string
  }

  export default function GalleryCard({
    type,
    image,
    children
  }: GalleryCardProps): JSX.Element {
  
      const iheight = type === 'main' ? "max(10rem, 30vw)" : 'max(7rem, 21vw)'
    return (
      <Box maxW="600px" padding="10px">
        <Image
          src={image}
          objectFit="cover"
          w={iheight}
          h={iheight}
          borderRadius="50%"
        />
  
        <Flex
          flexDir='column'
          gap='20px'
          padding='15px'
          alignItems='center'
          maxW={`calc(${iheight} - 30px)`}
          margin='auto'
        >
          {children}
        </Flex>
      </Box>
    )
  }
  