import { Box, Text } from "@chakra-ui/react";
import SimpleCard from "../../../../components/Cards/SimpleCard";
import Headings, { HeadingsFuctoryProps } from "../../../../components/Headings";
import { colors } from "../../../../theme";
import img1 from '../../../../assets/images/carpentry5.webp'
import { SimpleCardsDataProps } from "../../types";

interface ImageBgSectionCardProps {
    card: SimpleCardsDataProps
    chain: HeadingsFuctoryProps
  }

export default function ImageBgSection({
    card,
    chain,    
}: ImageBgSectionCardProps) {
    return (
        <Box
        height="max(100%, fit-content)"
        p="60px 0px"
        backgroundImage={img1}
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
          <SimpleCard
            type={ card.type}
            borderColor={colors.textLight}
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
              p="0px 30%"
            >
              { card.textContent.text}
            </Text>
          </SimpleCard>
        </Box>
      </Box>
    )
}