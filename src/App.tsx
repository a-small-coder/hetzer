import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import ForgePage from './pages/Forge'
import LendingPage from './pages/Lending'
import Root from './portfolio/Root'

import theme from './theme'


export default function App() {


  return (
    <ChakraProvider theme={theme}>

        <Routes>
          <Route path='/forge' element={<ForgePage/>}/>
          <Route path='/portfolio' element={<Root/>}/>
          <Route path='/lending' element={<LendingPage/>}/>
        </Routes>



    </ChakraProvider>
  )
}
