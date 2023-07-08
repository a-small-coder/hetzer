import { Box } from "@chakra-ui/react";
// import colors from "../theme";


interface ContainerProps {
    children: string | JSX.Element | JSX.Element[]
}

export default function Container({children}: ContainerProps): JSX.Element {

    return (
        <Box
            h='100%'
            width='100%'
            maxW={{xl: '1400px', lg: '960px', base: '100%'}}
            paddingX={{xl: '32px', lg: '24px', md: '20px', sm: '16px', base: '12px'}}
            // bg={colors.mainBg}
            m='0px auto'
        >
            {children}
        </Box>
    )
}