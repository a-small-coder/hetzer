/* eslint-disable react/jsx-no-undef */

import { Box, Container, SimpleGrid, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function ListHeader ({ children }: { children: ReactNode }) {
  return (
    <Text fontWeight='500' fontSize='lg' mb={2}>
      {children}
    </Text>
  )
}


function SocialButton ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}): JSX.Element {
  return (
    // @ts-ignore
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded='full'
      w={8}
      h={8}
      cursor='pointer'
      as='a'
      href={href}
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      transition='background 0.3s ease'
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    {/* @ts-ignore */}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW='6xl' py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align='flex-start'>
            <ListHeader>Company</ListHeader>
            <Link to='/'>About Us</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact Us</Link>
          </Stack>

          <Stack align='flex-start'>
            <ListHeader>Support</ListHeader>
            <Link to='/'>Help Center</Link>
            <Link to='/'>Safety Center</Link>
            <Link to='/'>Community Guidelines</Link>
          </Stack>

          <Stack align='flex-start'>
            <ListHeader>Legal</ListHeader>
            <Link to='/'>Cookies Policy</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Law Enforcement</Link>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW='6xl'
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction='row' spacing={6}>
            <SocialButton label='Twitter' href='/'>
              <FaTwitter />
            </SocialButton>
            <SocialButton label='YouTube' href='/'>
              <FaYoutube />
            </SocialButton>
            <SocialButton label='Instagram' href='/'>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}