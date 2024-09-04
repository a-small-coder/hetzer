import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import CatalogMenu from "./components/CatalogMenu/Menu";
import BottomImageSection from "../Landing/components/Sections/BottomSection";
import Footer from "../../components/Footer";
import { imageSectionCardProps } from "../Landing/data/cards";
import CatalogCards from "./components/CatalogCard/CatalogCard";

export default function CatalogPage(): JSX.Element {
    return (
        <Box height="100%" bg="white">
            {/* heading section */}
            <Header/>

            <Box bg="white" height="max(100%, fit-content)" paddingBottom="60px">
                <Box
                p={{ base: '0px 10px', md: '0px 20px', xl: '0px 10%' }}
                maxW={{ base: '100%', md: '700px', lg: '1280px', xl: '100%' }}
                display="flex"
                flexDir="column"
                alignItems="center"
                margin="auto"
                >
                    {/* Menu */}
                    <CatalogMenu/>
                </Box>
            </Box>

            {/* catalog */}
            <CatalogCards/>

            {/* bottom image section */}
            <BottomImageSection
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...imageSectionCardProps}
            />

            {/* footer section */}
            <Footer/>
        </Box>
    )
}