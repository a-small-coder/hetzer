import { Box, Text } from "@chakra-ui/react";
import MyButton from "../../../../components/Button";
import GalleryCard from "../../../../components/Cards/GalleryCard";
import { GalleryCardData } from "../../types";

export default function GalleryCustomCard({
  gCard
}: {
  gCard : GalleryCardData
}) {
    return (
        <GalleryCard
          type={gCard.type}
          image={gCard.image}
        >
          <Text
            fontSize={gCard.type === 'main' ? '42px' : '32px'}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            mb="-10px"
            color={gCard.titleColor}
          >
            {gCard.title}
          </Text>

          <Text
            fontSize={gCard.type === 'main' ? '14px' : '12px'}
            color={gCard.textColor}
            textTransform="uppercase"
            textAlign="center"
          >
            {gCard.text}
          </Text>

          <Box maxW="250px">
            <MyButton
              type={gCard.button.type}
              onClick={gCard.button.onClick}
              text={gCard.button.text}
            />
          </Box>
      </GalleryCard>
    )
}