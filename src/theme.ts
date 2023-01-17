import { extendTheme, ChakraTheme } from '@chakra-ui/react'
import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

const Heading: ComponentStyleConfig = {
  variants: {
    secondary: (props) => ({
      color: mode('gray.300', 'gray.600')(props),
    }),
  },
}

const components = { Heading }

const config: ChakraTheme['config'] = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const colors = {
  bgDark: "#1C2028",
  bgDarkHov: '#464E62',
  bgLight: '#FFFFFF',
  BrownAcent: '#DDACA8',
//   BrownAcentHow: '#EF8A7C',
  textDark: '#292F3B',
  textLight: '#FCFEFE',
  control: "#F2A69B",
  controlHov: "#ECB1A8",
  success: '#276749',
  error: '#AD1527',
  errorHov: "#82101D",
  disableContorol: "#3D4448",
  disableContorolHov: "#26272A",
  greenText: "#96B4B1",
  formError: "#FC8181"
}

// export const scrollbar = {
//   '&::-webkit-scrollbar': {
//     width: '12px',
//     borderRadius: '8px',
//     backgroundColor: colors.bgLightDark,
// },
// '&::-webkit-scrollbar-thumb': {
//     borderRadius: '8px',
//     backgroundColor: colors.control,
// },
// }

export const styles: ChakraTheme['styles'] = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('white', '#303030')(props),
    },
    colors,
  }),
}



export default extendTheme({ 
  config, 
  styles, 
  fonts: {
    heading: 'ABeeZee',
    body: 'ABeeZee',
  },
  components,
})
