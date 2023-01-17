import {
  ChakraProvider,
  HStack,
} from '@chakra-ui/react'
import { Link, Route, Routes } from 'react-router-dom'
import ForgePage from './pages/Forge'
import LendingPage from './pages/Lending'

import theme from './theme'


export default function App() {


  return (
    <ChakraProvider theme={theme}>
      <HStack
        position='fixed'
        zIndex='50'
      >

        <Link to='/forge'>
            forge
        </Link>
        <Link to='/lending'>
            lending
        </Link>
        </HStack>

        

        <Routes>
          <Route path='/forge' element={<ForgePage/>}/>
          <Route path='/lending' element={<LendingPage/>}/>
        </Routes>



    </ChakraProvider>
  )
}
