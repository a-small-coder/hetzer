// import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
// import MyButton, { ButtonFubric } from "../components/Button";
// import SimpleCard, { GaleryCard, ImageCard } from "../components/Cards";
// import Headings, { HeadingsFuctoryProps } from "../components/Headings";
// import { colors } from "../theme";

// import img from '../assets/images/MAN.webp'
// import img2 from '../assets/images/man2.webp'
// import img3 from '../assets/images/man3.webp'
// import img4 from '../assets/images/man4.webp'
// import img5 from '../assets/images/man5.webp'


// export default function ForgePage(): JSX.Element {


//     const headingsProps: HeadingsFuctoryProps[] = [
//         {
//           type: 'large',
//           text: [
//             'jso you can use all the style props and add responsive styles as well. It renders an',
//           ],
//         },
//         {
//           type: 'large',
//           text: ['so you can use all the style props and add'],
//           color: colors.bgDark,
//         },
//         {
//           type: 'chain',
//           text: [
//             'so you can use all',
//             'the style props and add responsive',
//             'styles as well. It renders an nini',
//           ],
//           color: colors.BrownAcent,
//         },
//       ]
    
//       const cardProps = [
//         {
//           id: 1,
//           type: 'full',
//           heading: 'title',
//           bodyContent:
//             'In web development, you may often feel the need to add transparent backgrounds. Searching for the transparent background property in CSS will not give you any results as there is no such transparent-background property. However, you can use alternative properties or the transparent color code for the same purpose.',
//           footerContent: 'viewMore',
//         },
//         {
//           id: 2,
//           type: 'opacity',
//           heading: 'title',
//           bodyContent:
//             'In web development, you may often feel the need to add transparent backgrounds. Searching for the transparent background property in CSS will not give you any results as there is no such transparent-background property. However, you can use alternative properties or the transparent color code for the same purpose.',
//           footerContent: 'viewMore',
//         },
//       ]
    
//       const cards = cardProps.map((card) => (
//         <SimpleCard key={card.id} type={card.type}>
//           <Headings
//             type="chain"
//             text={['My title card', 'super card', 'mega card', 'extra card']}
//             color="#DDACA8"
//           />
//           <Headings type="large" text={['My title card']} />
    
//           <Text fontSize="14px" color={colors.textLight} textTransform="uppercase">
//             n web development, you may often feel the need to add transparent
//             backgrounds. Searching for the transparent background property in CSS
//             will not give you any results as there is no such transparent-background
//             property. However, you can use alternative properties or the transparent
//             color code for the same purpose.
//           </Text>
    
//           <MyButton
//             type={{
//               variant: 'click',
//               color: 'void',
//             }}
//             onClick={() => {}}
//             text="view more"
//           />
//         </SimpleCard>
//       ))
    
//       const buttonsProps: ButtonFubric[] = [
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'click',
//             color: 'void',
//           },
//         },
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'click',
//             color: 'control',
//           },
//         },
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'click',
//             color: 'sckelet',
//           },
//         },
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'link',
//             color: 'void',
//           },
//           link: '/home',
//         },
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'link',
//             color: 'control',
//           },
//           link: '/home1',
//         },
//         {
//           onClick: () => {},
//           text: 'my button',
//           type: {
//             variant: 'link',
//             color: 'sckelet',
//           },
//           link: '/home2',
//         },
//       ]
    
//       const imageCardsProps: {
//         type: string
//         image: string
//         id: number
//         text: string
//       }[] = [
//         {
//           id: 1,
//           type: 'full',
//           image: img,
//           text:
//             'n web development, you may often feel the need to add transparent backgrounds.' +
//             'Searching for the transparent background property in CSS will not give you any' +
//             'results as there is no such transparent-background property. However, you can' +
//             'use alternative properties or the transparent color code for the same purpose.',
//         },
//         {
//           id: 2,
//           type: 'full',
//           image: img2,
//           text:
//             'n web development, you may often feel the need to add transparent backgrounds.' +
//             'Searching for the transparent background property in CSS will not give you any' +
//             'results as there is no such transparent-background property. However, you can' +
//             'use alternative properties or the transparent color code for the same purpose.',
//         },
//         {
//           id: 3,
//           type: 'full',
//           image: img3,
//           text:
//             'n web development, you may often feel the need to add transparent backgrounds.' +
//             'Searching for the transparent background property in CSS will not give you any' +
//             'results as there is no such transparent-background property. However, you can' +
//             'use alternative properties or the transparent color code for the same purpose.',
//         },
//         {
//           id: 4,
//           type: 'full',
//           image: img4,
//           text:
//             'n web development, you may often feel the need to add transparent backgrounds.' +
//             'Searching for the transparent background property in CSS will not give you any' +
//             'results as there is no such transparent-background property. However, you can' +
//             'use alternative properties or the transparent color code for the same purpose.',
//         },
//       ]
    
//       const imagesCards = imageCardsProps.map((card) => (
//         <ImageCard key={card.id} type={card.type} image={card.image}>
//           <Headings
//             type="chain"
//             text={['My title card', 'super card', 'mega card', 'extra card']}
//             color="#DDACA8"
//           />
//           <Headings key={`h-${card.id}`} type="large" text={['My title card']} />
    
//           <Text fontSize="14px" color={colors.textLight} textTransform="uppercase">
//             {card.text}
//           </Text>
    
//           <MyButton
//             type={{
//               variant: 'click',
//               color: 'sckelet',
//             }}
//             onClick={() => {}}
//             text="view more"
//           />
//         </ImageCard>
//       ))
    
//       const galaryCardsProps: { type: string; image: string; id: number }[] = [
//         {
//           id: 1,
//           type: 'side',
//           image: img5,
//         },
//         {
//           id: 2,
//           type: 'main',
//           image: img5,
//         },
//         {
//           id: 3,
//           type: 'side',
//           image: img5,
//         },
//       ]
    
//       const galaryCards = galaryCardsProps.map((gCard) => (
//         <GaleryCard key={gCard.id} type={gCard.type} image={gCard.image}>
//           <Text
//             fontSize={gCard.type === 'main' ? '42px' : '32px'}
//             fontWeight="bold"
//             textTransform="uppercase"
//             mb="-10px"
//           >
//             My Card title
//           </Text>
    
//           <Text
//             fontSize={gCard.type === 'main' ? '14px' : '12px'}
//             color={colors.textLight}
//             textTransform="uppercase"
//           >
//             n web development, you may often feel the need to add transparent
//             backgrounds. Searching for the transparent background property in CSS
//             will not give you any
//           </Text>
    
//           <Box maxW="250px">
//             <MyButton
//               type={{
//                 variant: 'click',
//                 color: 'control',
//               }}
//               onClick={() => {}}
//               text="view more"
//             />
//           </Box>
//         </GaleryCard>
//       ))


//     return (
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing="140px">
//             <VStack spacing="40px">
//               {headingsProps.map((h) => (
//                 <Headings
//                   key={h.type + h.text[0]}
//                   type={h.type}
//                   text={h.text}
//                   color={h.color}
//                 />
//               ))}
//             </VStack>

//             <HStack spacing="50px">
//               {buttonsProps.map((b) => (
//                 <MyButton
//                   key={`${b.type.variant}-${b.type.color}`}
//                   onClick={b.onClick}
//                   text={b.text}
//                   type={b.type}
//                   link={b.link}
//                 />
//               ))}
//             </HStack>

//             <HStack>{cards}</HStack>

//             <HStack>{imagesCards}</HStack>

//             <HStack spacing="40px" alignItems="center">
//               {galaryCards}
//             </HStack>
//           </VStack>
//         </Grid>
//     )
// }

export {}