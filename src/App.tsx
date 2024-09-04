import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import ForgePage from './pages/Forge'
import CatalogPage from './pages/Catalog/Catalog'
import LendingPage from './pages/Landing/Lending'

import theme from './theme'


export default function App() {


  return (
    <ChakraProvider theme={theme}>

        <Routes>
          <Route path='/forge' element={<ForgePage/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/lending' element={<LendingPage/>}/>
        </Routes>

    </ChakraProvider>
  )
}
