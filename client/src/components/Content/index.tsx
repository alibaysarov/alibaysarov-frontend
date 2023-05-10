import React,{FC} from 'react';
import cl from './index.module.sass';

import Box from '../Box';

import Card from '../Card';
import { ICard } from '../../types';
import Stack from '../Stack';
import Popup from '../Popup';
import Typography from '../Typography';
import Img from '../Img';
import { useMediaQuery } from '../../hooks';

interface ContentProps{
    posts:ICard[],
    loaded:boolean
}
const Content:FC<ContentProps> = ({posts,loaded}) => {
    const isPhone=useMediaQuery('(max-width:425px)')
    
    const [postInfo,setPostInfo]=React.useState<ICard | null>(null)
    const[popupOpen,setPopupOpen]=React.useState<boolean>(false)
    
    const cardClick=(obj:ICard)=>{
        setPostInfo(obj)
        setPopupOpen(true)
    }
    const closePopupHandler=()=>{
        setPostInfo(null)
        setPopupOpen(false)
    }
    return (
        <Box pb={30} type='fuild'>
            <Stack classes={cl.row} wrap={true} spacing='3rem' justify='center'>
            {
                    loaded
                    ?posts.map(el=>(
                        <Card {...el} key={el.title} clickHandler={cardClick.bind(null,el)} />
                    ))
                    :<h2>Идет загрузка</h2>
                }
            </Stack>
            
                    <Popup active={popupOpen} onClose={closePopupHandler}>
                        {
                            postInfo!=null&&(
                                <Box>
                                <Box mb={16}>
                                    <Stack style={{width:'100%'}} justify='end'>
                                        <Img clickHandler={closePopupHandler} alt={'close'} src={'public/img/icons/Close.svg'} width={24} height={24} />
                                    </Stack>
                                </Box>
                                <Img  cls={cl.popupImg} alt={postInfo.title} width={400} src={postInfo.img} srcSet={postInfo.img_2x} />
                                <Typography tag='h2'>{postInfo.title}</Typography>
                                <Box classes={cl.popupContent} >
                                    <Stack dir={'col'} spacing='16px'>
                                    <Typography tag='b' color='accent' fontSize={14}>{postInfo.tags}</Typography>
                                        <Stack align='center' spacing='14px'>
                                            <Typography tag='span' color='primary' fontSize={isPhone?10: 16}>{postInfo.autor}</Typography>
                                            <Typography tag='span' color='primary' fontSize={isPhone?10: 16}>{postInfo.date}</Typography>
                                            <Typography tag='span' color='primary' fontSize={isPhone?10: 16}>{postInfo.views} Views</Typography>
                                        </Stack>
                                    </Stack>
                                    <Box mt={20}>
                                        <Typography tag='p' color='text' fontSize={16}>
                                            {postInfo.text}
                                        </Typography>

                                    </Box>
                                </Box>
                                </Box>
                            )
                        }
                        
                    </Popup>
            
            
            
            
        </Box>
    );
};

export default Content;