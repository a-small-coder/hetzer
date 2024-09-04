import {
  Box
} from '@chakra-ui/react'
import { gallarySectionChainHeading, headingSectionChainHeading } from './data/other';
import Header from './components/Header';
import HeadingsCards from './components/HeadingsCards/Heading';
import FavoriteGallery from './components/FavoriteProducts/Gallery';
import { galaryCardsProps, headingSectionCards, imageSectionCardProps } from './data/cards';
import BottomImageSection from './components/Sections/BottomSection';
import CategoriesSection from './components/ProductSection/Section';
import Footer from '../../components/Footer';
import ImageBgSection from './components/Sections/ImageBgSection';


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
          
          <HeadingsCards
            chainSection={headingSectionChainHeading}
            cardsSection={headingSectionCards}
          />

          {/* gallary block */}
          <FavoriteGallery
            chainSection={gallarySectionChainHeading}
            galleryCards={galaryCardsProps}
          />
        </Box>
      </Box>

      {/* image bg section */}
      <ImageBgSection
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...imageSectionCardProps}
      />

      {/* product section */}
      <CategoriesSection/>

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
