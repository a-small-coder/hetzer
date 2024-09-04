import { Text } from "@chakra-ui/react";
import SimpleCard from "../../../../components/Cards/SimpleCard";
import Headings from "../../../../components/Headings";
import MyButton from "../../../../components/Button";
import { SimpleCardsDataProps } from "../../types";

export default function HeadingCard({card}: {
  card: SimpleCardsDataProps
}) {
  return (
    <SimpleCard type={card.type}>
      <Headings
        type={card.heading.type}
        text={card.heading.text}
        color={card.heading.color}
        size={card.heading.size}
      />

      <Text
        fontSize={card.textContent.size}
        color={card.textContent.color}
        textTransform="uppercase"
        textAlign="center"
      >
        {card.textContent.text}
      </Text>

      <MyButton
        type={card.button.type}
        onClick={card.button.onClick}
        text={card.button.text}
      />
    </SimpleCard>
  )
}