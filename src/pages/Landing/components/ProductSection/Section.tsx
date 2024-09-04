import { Box, Grid, VStack } from "@chakra-ui/react";
import Headings from "../../../../components/Headings";
import CategoryCard from "./CategoryCard";
import { imageCardsProps } from "../../data/cards";
import { gallarySectionChainHeading } from "../../data/other";

export default function CategoriesSection() {
    return (
        <Box padding="120px 20px" bgColor="white">
            <Box
                p={{ base: '0px 10px', md: '0px 20px', xl: '0px 10%' }}
                maxW={{ base: '100%', md: '700px', lg: '1280px', xl: '100%' }}
                display="flex"
                flexDir="column"
                alignItems="center"
                margin="auto"
            >
                <VStack
                    maxW="60%"
                    textAlign="center"
                    marginBottom="80px"
                    spacing="40px"
                >
                    <Headings
                    type={gallarySectionChainHeading.chain.type}
                    text={gallarySectionChainHeading.chain.text}
                    color={gallarySectionChainHeading.chain.color}
                    size={gallarySectionChainHeading.chain.size}
                    />

                    <Headings
                    type={gallarySectionChainHeading.large.type}
                    text={gallarySectionChainHeading.large.text}
                    color={gallarySectionChainHeading.large.color}
                    size={gallarySectionChainHeading.large.size}
                    />
                </VStack>
                <Grid
                    templateColumns='repeat(3, 1fr)'
                    gap={6}
                >
                    {imageCardsProps.map((card) => (
                    <CategoryCard key={card.id} card={card}/>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}