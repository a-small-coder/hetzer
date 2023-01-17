/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */


import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { colors } from '../theme'

// enum CardFooterContent {
//     "button",
//     "link",
//     "viewMore"
// }

export interface SimpleCardProps {
  // "opacity" | "full"
  type: string
  // "button" | "link" | "viewMore"
  children: JSX.Element | JSX.Element[],
  borderColor?: string
}

export interface ImageCardProps extends SimpleCardProps {
  image: string
}

// interface GaleryCardProps {
//     image: string,
//     children: JSX.Element | JSX.Element[]
// }

export default function SimpleCard({
  type,
  children,
  borderColor = colors.BrownAcent
}: SimpleCardProps): JSX.Element {
  return (
    <Box 
      bg={type === 'full' ? colors.bgDark : 'rgba(0,0,0,0)'} 
      p="15px"
      w='100%'
    >
      <VStack
        border={`1px solid ${borderColor}`}
        p="45px 20px"
        justifyContent="space-between"
        flexDir="column"
        fontSize="14px"
        color={colors.textLight}
        spacing="25px"
      >
        {children}
      </VStack>
    </Box>
  )
}

export function ImageCard({
  type,
  image,
  children,
  borderColor = 'white'
}: ImageCardProps): JSX.Element {
  return (
    <Box
      bg={type === 'full' ? colors.bgDark : 'rgba(0,0,0,0)'}
      shadow="0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)"
      position="relative"
      pb='10px'
    >
      <Image
        src={image}
        w="100%"
        objectFit="cover"
        h="max(10rem, 30vh)"
        mixBlendMode="overlay"
      />

      <Box
        position="absolute"
        top="15px"
        w="100%"
        h="max(10rem, 30vh)"
        bg="linear-gradient(180deg, rgba(55, 81, 143, 0) 2.48%, rgba(44, 61, 101, 0.402158) 70.48%, rgba(28, 32, 40, 0.979167) 99.2%, #202531 120.5%)"
      />

      <Box
        position="absolute"
        top="15px"
        left="15px"
        w="calc(100% - 30px)"
        border={`1px solid ${borderColor}`}
        borderBottom="none"
        h="max(10rem, 30vh)"
      />

      <Flex
        border={`1px solid ${borderColor}`}
        borderTop="none"
        p="25px 15px"
        justifyContent="space-between"
        alignItems='center'
        flexDir="column"
        fontSize="14px"
        color={colors.textLight}
        bg="rgba(0,0,0,0)"
        gap="20px"
        margin="0px 15px 15px 15px"
      >
        {children}
      </Flex>
    </Box>
  )
}

export function GaleryCard({
  type,
  image,
  children
}: ImageCardProps): JSX.Element {

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
