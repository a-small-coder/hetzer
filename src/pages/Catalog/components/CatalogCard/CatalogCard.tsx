/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Heading, HStack, Image, Tag, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import MyButton from "../../../../components/Button"
import SimpleCard from "../../../../components/Cards/SimpleCard"
import { allCatalogCard } from "../../data/cards"
import { BaseCardProps } from "../../types"
import { colors } from "../../../../theme"

interface Props {
  // eslint-disable-next-line react/require-default-props
  marginTop?: number
  tags: any[]
}

function BlogTags(props: Props) {
    const { marginTop = 0, tags } = props
    return (
      <HStack spacing={2} marginTop={marginTop}>
        {tags.map((tag) => (
            <Tag size='md' variant="solid" colorScheme='purple' key={tag}>
              {tag}
            </Tag>
          ))}
      </HStack>
    )
}

// eslint-disable-next-line import/prefer-default-export
export function BaseCard({
    id,
    title,
    description,
    price,
    tag,
    image,
}: BaseCardProps) {

    const b = {
        onClick: () => {},
        text: 'Подробнее',
        type: {
          variant: 'click',
          color: 'void',
        }
      }
  return <Box
        // marginTop={{ base: '1', sm: '2' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        p='0px 16px'
        >
        <Box
          display="flex"
          width='400px'
          marginRight="3"
          position="relative"
        >
          <Box
            width={{ base: '100%' }}
            zIndex="2"
            marginRight={{ base: '0', sm: '5%' }}
            >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={ image}
                alt={title}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent='space-between'
          marginTop={{ base: '3', sm: '0' }}>
            <Box>
                <BlogTags tags={[ tag]} />
                <Heading marginTop="1">
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }} textTransform='uppercase'>
                    { title}
                    </Text>
                </Heading>
                <Text
                    as="p"
                    marginTop="4"
                    // color={useColorModeValue('gray.700', 'gray.200')}
                    fontSize="lg">
                    { description}
                </Text>
            </Box>
          
          <Flex
            alignSelf='end'
            justify='end'
          >
            <MyButton
                  key={`${b.type.variant}-${b.type.color}`}
                  onClick={b.onClick}
                  text={b.text}
                  type={b.type}
                />
          </Flex>
        </Box>
    </Box>
}

export default function CatalogCards() {
    return (
      <VStack margin='20px auto' maxW='70%' >
        {allCatalogCard.map(el => (
          
          <SimpleCard key={el.id} type='full'>
            <BaseCard 
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...el}
            />
          </SimpleCard>
        ))}
      </VStack>
      
    )
}