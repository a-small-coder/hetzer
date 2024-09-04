import { Flex, VStack } from "@chakra-ui/react";
import Carousel from 'react-elastic-carousel'
import Headings from "../../../../components/Headings";
import GalleryCustomCard from "./GalleryCustomCard";

interface FavoriteGalleryProps {
    chainSection: {
        chain: HeadingsFuctoryProps
        large: HeadingsFuctoryProps
    }
    galleryCards: GalleryCardData[]
}

export default function FavoriteGallery({
    chainSection,
    galleryCards,
}: FavoriteGalleryProps) {

    return (
        <Flex w="100%" flexDir="column" alignItems="center" marginTop="150px">
            <VStack
                maxW="60%"
                textAlign="center"
                marginBottom="80px"
                spacing="40px"
            >
                <Headings
                type={chainSection.chain.type}
                text={chainSection.chain.text}
                color={chainSection.chain.color}
                size={chainSection.chain.size}
                />

                <Headings
                type={chainSection.large.type}
                text={chainSection.large.text}
                color={chainSection.large.color}
                size={chainSection.large.size}
                />
            </VStack>

            {/* @ts-ignore */}
            <Carousel itemsToShow={3} pagination={false}>
                {galleryCards.map((gCard) => (
                <GalleryCustomCard key={gCard.id} gcard={gcard}/>
                ))}
            </Carousel>
        </Flex>
    )
}