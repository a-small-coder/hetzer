import { Flex } from "@chakra-ui/react";
import Headings from "../../../../components/Headings";

interface HeadingCardsProps {
    chainSection: { data: HeadingsFuctoryProps; id: number }
    cardsSection: SimpleCardsDataProps[]
}

export default function HeadingsCards({
    chainSection
}: HeadingCardsProps) {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            marginTop="-200px"
            zIndex="60"
            gap="30px"
          >
            <Headings
              type={chainSection.data.type}
              text={chainSection.data.text}
              color={chainSection.data.color}
            />

            <Flex gap="30px" justifyContent="space-between">
              {cardsSection.map((card) => (
                <HeadingCard key={card.id} card={card}/>
              ))}
            </Flex>
          </Flex>
    )
}