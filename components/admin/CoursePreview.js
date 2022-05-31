import React,{useState,useEffect} from 'react'
import { Box, Heading, Text,AspectRatio,Image,VStack,Center,Button  } from 'native-base'
import  HtmlToReactParser from 'html-to-react'
function CoursePreview({item}) {
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
                        source={{uri:item.poster}}
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
                    {/* {item.preview && 
                        item.preview.map((video)=>{
                            return <Thumbnail id={video.link} navigation={props.navigation} 
                            key={video._id} 
                            link={`https://img.youtube.com/vi/${video.link}/hqdefault.jpg`} 
                            title={video.title} />
                        })

                    } */}
                    <Button mt='2' shadow='1' mb='7' >Buy Now</Button>
                </VStack>
            </Box>
        </>
    )
}

export default CoursePreview
