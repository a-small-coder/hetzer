export default function Header() {

    return (
        <Box
        paddingTop="50px"
        backgroundImage={headingImage}
        height="100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        position="relative"
        zIndex="4"
      >
        {/* container */}
        <Box
          p={{ base: '0px 10px', md: '0px 20px' }}
          maxW={{ base: '100%', md: '700px', lg: '1280px' }}
          display="flex"
          flexDir="column"
          alignItems="center"
          margin="auto"
        >
          {/* logo */}
          <Box display="flex" flexDir="column" alignItems="center" gap="10px">
            <Image src={logo} alt="logo" />
            <Headings
              type="chain"
              text={['la manufacture de almaty']}
              color={colors.BrownAcent}
            />
          </Box>

          {/* heading text */}

          <Box
            marginTop="160px"
            alignSelf="start"
            display="flex"
            flexDir="column"
            gap="10px"
            maxW="400px"
          >
            <Headings type="large" text={['Firm name']} />

            <Box border="1px solid white" p="10px" w="fit-content">
              <Headings type="large" text={['manufacture']} size="lg" />
            </Box>

            <Text
              fontSize="14px"
              textTransform="uppercase"
              textAlign="justify"
              mt="15px"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident modi animi voluptas dignissimos blanditiis ad deserunt
              commodi maiores atque eius eum voluptatem, molestiae dolorem
              inventore dicta enim iste impedit repellendus.
            </Text>
          </Box>
        </Box>
      </Box>
    )
}