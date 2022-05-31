import React,{} from 'react'
import {
    Box,
    useDisclose,
    IconButton,
    Stagger,
    HStack,
} from "native-base"
import {
    RiNotification3Line,
    RiStickyNoteLine,
    RiVideoLine,
    RiPriceTag3Line,
    RiCloseFill,
    RiAddCircleFill
} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
function AddStagger() {
    const { isOpen, onToggle } = useDisclose()
    const navigate = useNavigate()
    const goTo = (to) =>{
        navigate(to)
    }
    return (
        <div>
            <Box>
                <Box alignItems="center" minH="220">
                    <Stagger
                        visible={isOpen}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            translateY: 34,
                        }}
                        animate={{
                            translateY: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                                type: "spring",
                                mass: 0.8,
                                stagger: {
                                    offset: 30,
                                    reverse: true,
                                },
                            },
                        }}
                        exit={{
                            translateY: 34,
                            scale: 0.5,
                            opacity: 0,
                            transition: {
                                duration: 100,
                                stagger: {
                                    offset: 30,
                                    reverse: true,
                                },
                            },
                        }}
                    >
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="indigo.500"
                        colorScheme="indigo"
                        borderRadius="full"
                        icon={<RiVideoLine />}
                        onPress={()=>goTo('/admin/add/course')}
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="yellow.400"
                        colorScheme="yellow"
                        borderRadius="full"
                        icon={<RiStickyNoteLine />}
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="teal.400"
                        colorScheme="teal"
                        borderRadius="full"
                        icon={<RiNotification3Line />}
                        onPress={()=>goTo('/admin/notification')}
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="green.400"
                        colorScheme="red"
                        borderRadius="full"
                        icon={<RiPriceTag3Line />}
                        onPress={()=>{

                        }}
                    />
                    </Stagger>
                </Box>
                <HStack alignItems="center">
                    <IconButton
                        variant="solid"
                        borderRadius="full"
                        size="lg"
                        onPress={onToggle}
                        bg="cyan.400"
                        icon={isOpen?<RiCloseFill />:<RiAddCircleFill style={{color:'white'}} />}
                    />
                </HStack>
                </Box>
        </div>
    )
}

export default AddStagger
