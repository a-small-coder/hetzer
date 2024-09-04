import { Box, Text } from "@chakra-ui/react";
import Headings, { HeadingsFuctoryProps } from "../../../../components/Headings";
import MyButton from "../../../../components/Button";
import img6 from "../../../../assets/images/ceh5.png"
import { SimpleCardsDataProps } from "../../types";

interface BottomImageSectionProps {
    card: SimpleCardsDataProps
    chain: HeadingsFuctoryProps
}
export default function BottomImageSection({
    card,
    chain,    
}: BottomImageSectionProps) {
    return (
        <Box
        height="max(100%, fit-content)"
        p="120px 0px"
        backgroundImage={img6}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          p={{ base: '0px 10px', md: '0px 20px', xl: '0px 10%' }}
          maxW={{ base: '100%', md: '700px', lg: '1280px', xl: '100%' }}
          display="flex"
          flexDir="column"
          alignItems="center"
          margin="auto"
        >
          <Box
            display='flex'
            flexDir='column'
            maxW='600px'
            alignItems='center'
            gap='25px'
          >
            <Headings
              type={ chain.type}
              text={ chain.text}
              color={ chain.color}
              size={ chain.size}
            />

            <Headings
              type={ card.heading.type}
              text={ card.heading.text}
              color={ card.heading.color}
              size={ card.heading.size}
            />

            <Text
              fontSize={ card.textContent.size}
              color={ card.textContent.color}
              textTransform="uppercase"
              textAlign="center"
              w="100%"
            >
              { card.textContent.text}
            </Text>
            <MyButton
              type={{
                variant: 'click',
                color: 'void'
              }}
              onClick={()=>{}}
              text='click me'
            />
          </Box>
        </Box>
      </Box>
    )
}