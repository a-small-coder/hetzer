/* eslint-disable react/require-default-props */

import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../theme";


interface SimpleClickButton {
    onClick: () => void,
    // typeColor: string,
    text: string
}

interface SimpleLinkButton extends SimpleClickButton{
    link: string
}


export interface ButtonFubric extends SimpleClickButton {
    type: {
        variant: string,  // click link
        color: string // void control sckelet
    },
    link?: string
}


function ClickButtonVoid({onClick, text}: SimpleClickButton): JSX.Element {

    return (
        <Box
            bg='rgba(0,0,0,0)'
        >
            <Button
                m='0px 1px'
                p='7px 15px'
                minH='46px'
                textTransform='uppercase'
                fontSize='14px'
                textAlign='center'
                color={colors.BrownAcent}
                bg='rgba(0,0,0,0)'
                borderRadius='0'
                _hover={{
                    m:'0',
                    border: `1px solid ${colors.BrownAcent}`,
                    opacity: '0.8'
                }}
                onClick={onClick}
            >
                {text}
            </Button>
        </Box>
    )
    
}

function ClickButtonSckelet({onClick, text}: SimpleClickButton): JSX.Element {

    return (
        <Box
            bg='rgba(0,0,0,0)'
        >
            <Button
                p='7px 15px'
                minH='46px'
                textTransform='uppercase'
                fontSize='14px'
                textAlign='center'
                color={colors.BrownAcent}
                bg='rgba(0,0,0,0)'
                borderRadius='0'
                border={`1px solid ${colors.BrownAcent}`}
                _hover={{
                    bg:'rgba(0,0,0,0.15)'
                }}
                onClick={onClick}
            >
                {text}
            </Button>
        </Box>
    )
    
}

function ClickButtonControl({onClick, text}: SimpleClickButton): JSX.Element {

    return (
        <Box
            role="group"
            bg={colors.control}
            _hover={{
                bg: colors.controlHov
            }}
            p='5px'
        >
            <Button
                w='100%'
                border='1px solid white'
                borderRadius='0'
                bg={colors.control}
                p='7px 25px'
                minH='36px'
                textTransform='uppercase'
                fontSize='14px'
                textAlign='center'
                color='white'
                _groupHover={{
                    bg: colors.controlHov
                }}
                onClick={onClick}
            >
                {text}
            </Button>
        </Box>
    )
    
}

function LinkButtonVoid({onClick, text, link}: SimpleLinkButton): JSX.Element {

    return (
        <Box
        bg='rgba(0,0,0,0)'
        >
            <Link to={link}>
                <Button
                    m='0px 1px'
                    p='7px 15px'
                    minH='46px'
                    textTransform='uppercase'
                    fontSize='14px'
                    textAlign='center'
                    color={colors.BrownAcent}
                    bg='rgba(0,0,0,0)'
                    borderRadius='0'
                    _hover={{
                        m:'0',
                        border: `1px solid ${colors.BrownAcent}`,
                        opacity: '0.8'
                    }}
                    onClick={onClick}
                >
                    {text}
                </Button>
            </Link>
        </Box>
    )
    
}

function LinkButtonSckelet({onClick, text, link}: SimpleLinkButton): JSX.Element {

    return (
        <Box
            bg='rgba(0,0,0,0)'
        >
            <Link to={link}>
                <Button
                    p='7px 15px'
                    minH='46px'
                    textTransform='uppercase'
                    fontSize='14px'
                    textAlign='center'
                    color={colors.BrownAcent}
                    bg='rgba(0,0,0,0)'
                    borderRadius='0'
                    border={`1px solid ${colors.BrownAcent}`}
                    _hover={{
                        bg:'rgba(0,0,0,0.15)'
                    }}
                    onClick={onClick}
                >
                    {text}
                </Button>
            </Link>
        </Box>
    )
    
}

function LinkButtonControl({onClick, text, link}: SimpleLinkButton): JSX.Element {

    return (
        <Box
            role="group"
            bg={colors.control}
            _hover={{
                bg: colors.controlHov
            }}
            p='5px'
        >
            <Link to={link}>
            
                <Button
                    border='1px solid white'
                    borderRadius='0'
                    bg={colors.control}
                    p='7px 25px'
                    minH='36px'
                    textTransform='uppercase'
                    fontSize='14px'
                    textAlign='center'
                    color='white'
                    _groupHover={{
                        bg: colors.controlHov
                    }}
                    onClick={onClick}
                >
                    {text}
                </Button>
            </Link>
        </Box>
    )
    
}


export default function MyButton({type, text, onClick, link='/'}: ButtonFubric): JSX.Element {


    switch (type.variant) {
        case 'click':
            
            switch (type.color) {
                case 'void':
                    
                    return (
                        <ClickButtonVoid 
                            onClick={onClick}
                            text={text}
                        />
                    )
                
                case 'sckelet':
                
                return (
                    <ClickButtonSckelet 
                        onClick={onClick}
                        text={text}
                    />
                )

                case 'control':
                
                return (
                    <ClickButtonControl
                        onClick={onClick}
                        text={text}
                    />
                )
            
                default:
                    return (
                        <ClickButtonSckelet 
                            onClick={onClick}
                            text={text}
                        />
                    );
            }

            case 'link':
            
            switch (type.color) {
                case 'void':
                    
                    return (
                        <LinkButtonVoid 
                            onClick={onClick}
                            text={text}
                            link={link}
                        />
                    )
                
                case 'sckelet':
                
                return (
                    <LinkButtonSckelet 
                        onClick={onClick}
                        text={text}
                        link={link}
                    />
                )

                case 'control':
                
                return (
                    <LinkButtonControl
                        onClick={onClick}
                        text={text}
                        link={link}
                    />
                )
            
                default:
                    return (
                        <LinkButtonSckelet 
                            onClick={onClick}
                            text={text}
                            link={link}
                        />
                    );
            }
        
        default:
            return (
                <LinkButtonVoid 
                    onClick={() => {}}
                    text="no content"
                    link={link}
                />
            )
    }

    
}