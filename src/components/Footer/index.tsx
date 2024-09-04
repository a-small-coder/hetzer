import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    BsInstagram,
    BsTelegram,
    BsWhatsapp,
} from 'react-icons/bs'
import { colors } from "../../theme";
import logo from "../../assets/icons/logo.png";
import LargeWithAppLinksAndSocial from "../../portfolio/components/footer/Footer";

export default function Footer() {
    return (
        <Box padding="60px 20px" bgColor={colors.bgDark}>
            <Box
                p={{ base: '0px 10px', md: '0px 20px', xl: '0px 10%' }}
                maxW={{ base: '100%', md: '700px', lg: '1280px', xl: '100%' }}
                display="flex"
                flexDir="column"
                alignItems="center"
                margin="auto"
            >
                <HStack
                    justifyContent='space-between'
                    w='100%'
                >
                    <Flex
                    gap='40px'
                    alignItems='center'  
                    >
                    <Image src={logo} alt="logo" />
                    <Text>
                        our company title
                    </Text>
                    </Flex>

                    <Flex
                        gap='25px'
                        alignItems='center'
                    >
                        <Text
                        mr='25px'
                        >
                        subscribe us
                        </Text>
                        <Link to='/instagramm'>
                        <Icon as={BsInstagram} boxSize='32px'/>
                        </Link>
                        <Link to='/telegramm'>
                        <Icon as={BsTelegram} boxSize='32px'/>
                        </Link>
                    
                        <Link to='/whatsapp'>
                        <Icon as={BsWhatsapp} boxSize='32px'/>
                        </Link>
                    </Flex>

                </HStack>

                <Box
                    minH='150px'
                    minW='100%'
                    bg={colors.bgDark}
                >
                    <LargeWithAppLinksAndSocial/>
                </Box>
            </Box>
        </Box>
    )
}