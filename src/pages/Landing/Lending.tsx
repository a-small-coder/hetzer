import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import Carousel from 'react-elastic-carousel'
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

import headingImage from '../assets/images/ceh3.png'
import logo from '../assets/icons/logo.png'
import Headings, { HeadingsFuctoryProps } from '../../components/Headings'
import { colors } from '../../theme'
import MyButton, { ButtonFubric } from '../../components/Button'
import SimpleCard, { GaleryCard, ImageCard } from '../../components/Cards'

import img5 from '../assets/images/man5.webp'
import img1 from '../assets/images/carpentry5.webp'
import img from '../assets/images/MAN.webp'
import img2 from '../assets/images/man2.webp'
import img3 from '../assets/images/man3.webp'
import img4 from '../assets/images/man4.webp'
import img6 from '../assets/images/ceh5.png'
import { headingSectionChainHeading } from './data/other';
import Header from './components/Header';


interface SimpleCardsDataProps {
  type: string
  heading: {
    type: string
    text: string[]
    size: string
    color: string
  }
  textContent: {
    size: string
    text: string
    color: string
  }
  button: ButtonFubric
  id: number
}

export default function LendingPage(): JSX.Element {

  return (
    <Box height="100%" bg="white">
      {/* heading section */}
      <Header/>

      {/* gallary section + heading cards */}
      <Box bg="white" height="max(100%, fit-content)" paddingBottom="60px">
        <Box
          p={{ base: '0px 10px', md: '0px 20px', xl: '0px 10%' }}
          maxW={{ base: '100%', md: '700px', lg: '1280px', xl: '100%' }}
          display="flex"
          flexDir="column"
          alignItems="center"
          margin="auto"
        >
          {/* heading cards */}
          

          {/* gallary block */}
          <Flex w="100%" flexDir="column" alignItems="center" marginTop="150px">
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

            {/* @ts-ignore */}
            <Carousel itemsToShow={3} pagination={false}>
              {galaryCardsProps.map((gCard) => (
                <GaleryCard
                  key={gCard.id}
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
                </GaleryCard>
              ))}
            </Carousel>
          </Flex>
        </Box>
      </Box>

      {/* image bg section */}
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
            key={imageSectionCardProps.card.id}
            type={imageSectionCardProps.card.type}
            borderColor={colors.textLight}
          >
            <Headings
              type={imageSectionCardProps.chain.type}
              text={imageSectionCardProps.chain.text}
              color={imageSectionCardProps.chain.color}
              size={imageSectionCardProps.chain.size}
            />

            <Headings
              type={imageSectionCardProps.card.heading.type}
              text={imageSectionCardProps.card.heading.text}
              color={imageSectionCardProps.card.heading.color}
              size={imageSectionCardProps.card.heading.size}
            />

            <Text
              fontSize={imageSectionCardProps.card.textContent.size}
              color={imageSectionCardProps.card.textContent.color}
              textTransform="uppercase"
              textAlign="center"
              w="100%"
              p="0px 30%"
            >
              {imageSectionCardProps.card.textContent.text}
            </Text>
          </SimpleCard>
        </Box>
      </Box>

      {/* product section */}
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
              <GridItem
                key={card.id}
              >
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
            ))}
          </Grid>
        </Box>
      </Box>

    {/* bottom image section */}
      <Box
        height="max(100%, fit-content)"
        p="120px 0px"
        backgroundImage={img6}
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
          <Box
            display='flex'
            flexDir='column'
            maxW='600px'
            alignItems='center'
            gap='25px'
          >
            <Headings
              type={imageSectionCardProps.chain.type}
              text={imageSectionCardProps.chain.text}
              color={imageSectionCardProps.chain.color}
              size={imageSectionCardProps.chain.size}
            />

            <Headings
              type={imageSectionCardProps.card.heading.type}
              text={imageSectionCardProps.card.heading.text}
              color={imageSectionCardProps.card.heading.color}
              size={imageSectionCardProps.card.heading.size}
            />

            <Text
              fontSize={imageSectionCardProps.card.textContent.size}
              color={imageSectionCardProps.card.textContent.color}
              textTransform="uppercase"
              textAlign="center"
              w="100%"
            >
              {imageSectionCardProps.card.textContent.text}
            </Text>
            <MyButton
              type={{
                variant: 'click',
                color: 'void'
              }}
              onClick={()=>{}}
              text='click me'
            />
          </Box>
        </Box>
      </Box>

    {/* footer section */}
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
        </Box>
      </Box>
    </Box>
  )
}
