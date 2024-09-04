/* eslint-disable react/require-default-props */
import { Box, Flex, Heading } from "@chakra-ui/react"
// import { colors } from "../theme"

export interface HeadingsFuctoryProps {
    type: string,
    text: string[],
    // hNumber: number
    color?: string
    size?: string
}


export default function Headings({type, text, color='white', size='2xl'}: HeadingsFuctoryProps): JSX.Element {

    switch (type) {
        case 'large':
            
            return (
                <Heading
                    color={color}
                    size={size}
                    textTransform='uppercase'
                    textAlign='center'
                >
                    {text}
                </Heading>
            )
        
        case 'chain':
            return (
                <Flex 
                    alignItems='baseline'
                >
                {text.map((h,i) => {
                    if (i === text.length -1) return (
                        <Heading
                            key={h}
                            color={color}
                            size={size === '2xl' ? 'xs' : size}
                            m='0px 0px 0px 7px'
                            textTransform='uppercase'
                        >
                            {h}
                        </Heading>
                    )
                    return (
                        <Box
                        key={h}
                        display='flex'
                        alignItems='center'
                        >
                            <Heading
                                color={color}
                                size={size === '2xl' ? 'xs' : size}
                                m='0px 7px'
                                textTransform='uppercase'
                            >
                                {h}
                            </Heading>
                            <Heading
                                key={`dot-${h}`}
                                color={color}
                                size={size === '2xl' ? 'xs' : size}
                                textTransform='uppercase'
                            >
                                -
                            </Heading>
                        </Box>
                    )
                    
                })}
                </Flex>
                
                
            )
    
        default:
            return (
                <Heading
                    color={color}
                    size='3xl'
                    textTransform='uppercase'
                >
                    {text[0]}
                </Heading>
            )
    }
}