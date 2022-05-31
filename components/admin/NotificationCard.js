import React from 'react'
import {Text,Box,Heading,Flex,AspectRatio,Image, Button, Center} from 'native-base'
function NotificationCard(props) {
    return (
        <Box
            m='5'
            p='5'
            _light={{backgroundColor:'#ffffff'}}
            _dark={{backgroundColor:'darkBlue.900'}}
            shadow='1'
            borderRadius='2'
            width='100%'
            
        >
            <Flex 
                direction='row'
                alignItems = 'center'
                justifyContent = 'flex-start'
                overflow = 'hidden'
            >
                <Box w={70} >
                    <AspectRatio ratio={1/1.1} >
                        <Image
                            source = {
                                {
                                    uri: props.image
                                }
                            }
                            alt={'item.title'}
                            borderRadius='2'
                            // height={90}
                            // width={90}
                        />
                    </AspectRatio>
                </Box>
                <Box
                    pl='2'
                    overflow='hidden'
                >
                    <Text fontSize='18' fontWeight='700' >{props.title}</Text>
                    <Text  
                        textAlign = 'justify'
                        fontSize = '12'
                        height = {55} 
                    >
                        {props.description}
                    </Text>
                    
                </Box>
            </Flex>
            <Center>
                <Button.Group>
                    <Button>
                        View
                    </Button>
                    <Button>
                        Edit
                    </Button>
                    <Button>
                        Delete
                    </Button>
                </Button.Group>   
            </Center>
            
        </Box> 
    )
}

export default NotificationCard
