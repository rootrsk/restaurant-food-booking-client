import React,{ useState, useEffect } from 'react'
import { Box, Input, Button, Flex, Select, Modal, ScrollView,useToast,Text } from 'native-base'
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import CoursePreview from './CoursePreview';
import { deleteApi, patchApi, postApi } from './../../utils/adminApi'
import NotificationPreview from './NotificationPreview';
function NotificationForm(props) {
    let { item } = props
    if(!item){
        item={}
    }
    const toast = useToast()
    const [_id,] = useState(item._id || '')
    const [title,setTitle] = useState(item.title || '')
    const [description,setDescription] = useState(item.description || '')
    const [image,setImage] = useState(item.image || '')
    const [html, setHtml] = useState(item.html || '')
    const [preview,setPreview] = useState(false)
    const [loading,setLoading] =useState(false)
    const [editor,setEditor] = useState('')
    const [alert_modal,setAlertModal] = useState(false)
    const onStateChange = (state) =>{
        setEditor(state)
        setHtml(draftToHtml(convertToRaw(state.getCurrentContent())))
    }
    const crudHandler = async (operation)=>{
        
        setLoading(true)
        const response = operation==='Create'? await postApi('/notification',{
            title,description,image,html,
        }):operation==='Delete'? await deleteApi('/notification',{_id}):
        await patchApi(`/notification`,{
            _id,title, description, image, html,
        })
        setLoading(false)
        if(response.error){
            toast.show({
                title:'Error',
                description: response.error,
                status:'error',
                placement:'top-right'
            })
        }else{
            toast.show({
                title:'Success',
                description:`Notification ${operation}d Successfully.`,
                status:'success',
                placement:'top-right'
            })
        }
    }
    
    useEffect(()=>{
        const contentBlock = htmlToDraft(html)
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditor(editorState)
        }
        return
    },[])
    
    return (
        <Box
            m='5'
            p='5'
            _light={{background:'gray.200'}}
        >
            <Box>
                <Input 
                    m='2'
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                    
                />
                
                <Input 
                    m='2'
                    placeholder='image'
                    value={image}
                    onChangeText={setImage}
                />  
                <Box p='2' >
                    <textarea 
                        style={{outline:'none',borderColor:'#eee',borderRadius:'2px',padding:'5px'}}
                        rows='3'
                        value={description}
                        placeholder='Description'
                        onChange={(e)=>setDescription(e.target.value)}
                        
                    />
                </Box>
                <Box m='2' shadow='2' p='2' position='relative' zIndex='2'
                    _light={{background:'white'}}               
                >
                    <Editor
                        editorState={editor}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onStateChange}
                    />    
                </Box>
                
                <Button
                    m='5'
                    onPress={()=>setPreview(true)}
                >
                    Preview
                </Button>
                <Flex direction='row'
                    justify='center'
                    p='2'
                    position='relative' 
                    zIndex='1'
                >
                    {!_id ? 
                        <Button
                            m='2'
                            ptb='2'
                            isLoading={loading}
                            isLoadingText='Creating...'
                            onPress={()=>crudHandler('Create')}
                        >
                            Create
                        </Button>:
                        <Button.Group>
                           <Button
                                m='2'
                                ptb='2'
                                isLoading={loading}
                                isLoadingText='Updating...'
                                onPress={()=>crudHandler('Update')}
                            >
                                Update
                            </Button> 
                            <Button
                                m='2'
                                ptb='2'
                                onPress={()=>setAlertModal(true)}
                                isLoading={loading}
                                isLoadingText='Deleting...'
                            >
                                Delete
                            </Button>
                        </Button.Group>

                        
                    }
            </Flex>
            </Box>
            <Modal isOpen={preview} onClose={()=>setPreview(false)} maxWidth='450px' p='5' m='auto' mb='2' >
                <Modal.Content  m='auto' width='100%' marginTop='300px'   >
                    <Modal.Header>Notification Preview</Modal.Header>
                    <Modal.CloseButton />
                    <Modal.Body margin='auto' mt='5'  >
                        <ScrollView>
                           <NotificationPreview
                                item={{
                                    _id,title,description,html,image
                                }}
                            /> 
                        </ScrollView>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
            <Modal isOpen={alert_modal} onClose={()=>setAlertModal(false)} maxWidth='450px' p='5' m='auto' mb='2' >
                <Modal.Content  m='auto'width = '100%'marginTop = '300px'>
                    <Modal.Header>Delete Alert</Modal.Header>
                    <Modal.CloseButton />
                    <Modal.Body margin='auto' mt='5'  >
                        <Box>
                            <Text>Once you delete this Notification, you will not be able to recover it. </Text>
                        </Box>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group align='right' >
                            <Button
                                onPress={()=>crudHandler('Delete')}
                                isLoading={loading}
                                isLoadingText='Deleting...'
                                variant='ghost'
                            >Delete</Button>
                            <Button variant='ghost' onPress={()=>setAlertModal(false)} >Cancel</Button>
                        </Button.Group>    
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            
            
            
        </Box>
    )
}

export default NotificationForm
