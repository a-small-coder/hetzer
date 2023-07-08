import { BellIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, Heading, IconButton, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Container from "./components/Container";
import LargeWithAppLinksAndSocial from "./components/footer/Footer";
import colors from "./theme";
// import Container from "./components/Container";


interface MenuItemData {
    id: number,
    text: string,
    link: string,
}

interface NavItem {
    text: string,
    link: string,
}

function MobileNavItem ({ text, link }: NavItem)  {
  
    return (
        <Link to={link}>
            <Flex
                my='20px'
                py={2}
                px='15px'
                borderRadius='10px'
                flex='1 0'
                align='start'
                bg={colors.blocksBg}
                
                _hover={{
                    textDecoration: 'none',
                    bg: colors.lightBg
                }}
            >
                <Text
                    fontWeight='600'
                    fontSize='md'
                    color={colors.mainText}>
                    {text}
                </Text>
            </Flex>
        </Link>
        
    );
  };



export default function Root(): JSX.Element {


    const location = useLocation().pathname;
    console.log(location)
    
    const menuItemsData: MenuItemData[] = [
        {
            id: 1,
            text: "Главная",
            link: "",
        },
        {
            id: 2,
            text: "Портфолио",
            link: "works",
        },
        {
            id: 3,
            text: "Контакты",
            link: "contacts",
        },
        {
            id: 4,
            text: "Обо мне",
            link: "about-me",
        }
    ]

    const desktopMenuItems = menuItemsData.map( mi => (
        <Link 
            to={mi.link} 
            key={mi.id}
            style={{display: 'block', }}
        >
            <Box
                minH={{base: '38px', lg: '44px', xl: '52px'}}
                minW={{base: '100px', lg: '125px', xl: '150px'}}
                borderRadius='25px'
                w='100%'
                p='8px 32px'
                bg={`/portfolio${mi.link}` === location ? colors.mainControl : ''}
                color={colors.mainText}
                fontSize={{base: '14px', lg: '16px', xl: '18px'}}
                fontWeight='bold'
                textAlign='center'
                display='flex'
                alignItems='center'
                justifyContent='center'

            >
                <span>{mi.text}</span>
            </Box>
        </Link>
        
    ))

    const mobileMenuItems = menuItemsData.map( navItem => (
        <MobileNavItem 
            key={navItem.id} 
            text={navItem.text} 
            link={navItem.link}
        />
    ))

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            height='100%'
            display='flex'
            flexDir='column'
            bg={colors.mainBg}
        >
            
            {/* header */}
            <Box
                minH='150px'
                h='fit-content'
                minW='100%'
            >

                <Container>
                    <Flex
                        alignItems='center'
                        h='100%'
                        w='100%'
                    >
                        {/* logo */}
                        <Heading
                            mr='20px'
                            justifySelf='start'
                        >
                            LOGO
                        </Heading>

                        {/* desctop menu */}
                        <Flex
                            justifySelf='end'
                            flex='1 0' 
                            justifyContent='space-evenly'
                            display={{base: 'none', md: 'flex'}}
                        >
                            {desktopMenuItems}
                        </Flex>


                        <Flex
                            flex={{ base: 1, md: 'auto' }}
                            display={{ base: 'flex', md: 'none' }}
                            justifyContent='flex-end'
                            alignItems='center'
                        >
                            <Box
                                display='flex'
                                
                            >
                                <BellIcon w='6' h='6' color={colors.mainText}/>
                                <IconButton
                                    onClick={onToggle}
                                    icon={
                                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                    }
                                    variant='ghost'
                                    aria-label='Toggle Navigation'
                                />
                            </Box>
                            
                        </Flex>                        

                    </Flex>
                    
                </Container>
            </Box>

            <Collapse in={isOpen} animateOpacity>
                        <Stack
                            bg={colors.mainBg}
                            display={{md: 'none' }}
                            position='fixed'
                            p='15px'
                            w='100%'
                            spacing='20px'
                            h='100vh'
                        >
                            {mobileMenuItems}
                        </Stack>
                    </Collapse>

            {/* body */}
            <Box
                flex='1 0'
                width='100%'
                border='1px solid red'
            >
                b
            </Box>

            {/* footer */}
            <Box
                minH='150px'
                minW='100%'
            >
                <LargeWithAppLinksAndSocial/>
            </Box>


        </Box>
    )
}