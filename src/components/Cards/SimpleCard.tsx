import { Box, VStack } from '@chakra-ui/react'
import { colors } from '../../theme'

export interface SimpleCardProps {
    // "opacity" | "full"
    type: string
    // "button" | "link" | "viewMore"
    children: JSX.Element | JSX.Element[],
    // eslint-disable-next-line react/require-default-props
    borderColor?: string
  }

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