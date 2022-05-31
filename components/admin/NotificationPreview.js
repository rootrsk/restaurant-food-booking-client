import React,{useState,useEffect} from 'react'
import { Box, Heading, Text,AspectRatio,Image,VStack,Center,Button  } from 'native-base'
import  HtmlToReactParser from 'html-to-react'
function NotificationPreview({item}) {
    console.log(item)
    console.log(item.poster)
    const [html,setHtml] = useState('')
    useEffect(()=>{
        
        if(item.html){
            const htmlToReactParser = new HtmlToReactParser.Parser();
            const reactElement = htmlToReactParser.parse(item.html);
            setHtml(reactElement)  
        }
        return
    },[])
    return (
        <>
            <Box>
                {<AspectRatio ratio={16 / 9}>
                    <Image
                        source={{uri:item.image}}
                        alt={item.title}
                    />
                </AspectRatio>}
                <VStack pl='2.5' pr='2.5' >
                    <Center mt='5' >
                       <Heading >{item.title}</Heading> 
                    </Center>
                    <Text>
                        {item.description}
                    </Text>
                    {item.html && <Box p='2' >
                            {html}
                        </Box>
                    }
                </VStack>
            </Box>
        </>
    )
}

export default NotificationPreview
