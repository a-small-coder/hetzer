import { GridItem, Text } from "@chakra-ui/react";
import ImageCard from "../../../../components/Cards/ImageCard";
import Headings from "../../../../components/Headings";
import MyButton from "../../../../components/Button";
import { CategoryCardData } from "../../types";
import { colors } from "../../../../theme";

export default function CategoryCard({
    card
}: {
    card: CategoryCardData
}) {

    return (
        <GridItem>
            <ImageCard
                type={card.type} 
                image={card.image}
            >
                <Headings
                    type="chain"
                    text={card.chainHeader.text}
                    size={card.chainHeader.size}
                    color="#DDACA8"
                />
                <Headings
                    key={`h-${card.id}`}
                    type="large"
                    text={card.mainHeader.text}
                    size={card.mainHeader.size}
                />

                <Text
                    fontSize="14px"
                    color={colors.textLight}
                    textTransform="uppercase"
                >
                {card.textContent.text}
                </Text>

                <MyButton
                    type={card.button.type}
                    onClick={card.button.onClick}
                    text={card.button.text}
                />
            </ImageCard>
        </GridItem>
    )
}