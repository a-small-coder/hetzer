import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../../../../theme";

export default function CatalogMenu() {
    const data: {
        id: number,
        text: string,
        link: string,
        isCurrent: boolean
    }[] = [
        {
            id: 1,
            text: 'главная',
            link: '/catalog/ladders',
            isCurrent: false
        },
        {
            id: 2,
            text: 'мебель для дома',
            link: '/catalog/furniture-home',
            isCurrent: true
        },
        {
            id: 3,
            text: 'мебель для сада',
            link: '/catalog/furniture-garden',
            isCurrent: false
        },
        {
            id: 4,
            text: 'двери',
            link: '/catalog/doors',
            isCurrent: false
        },
        {
            id: 5,
            text: 'лестницы',
            link: '/catalog/ladders',
            isCurrent: false
        },
    ]
    const color = colors.BrownAcent

    return (
        <Flex
            alignItems='baseline'
            justify='space-between'
            w='100%'
            marginTop="-200px"
            zIndex="60"
            gap="30px"
        >
            {data.map(el => (
                <Link to={el.link}>
                    <Flex
                        justify='center'
                        p='8px 16px'
                        borderBottom={el.isCurrent ? `1px solid ${color}` : 'none'}
                    >
                        <Text
                            color={color}
                            m='0px 0px 0px 7px'
                            textTransform='uppercase'
                        >
                            {el.text}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Flex>
    )
}