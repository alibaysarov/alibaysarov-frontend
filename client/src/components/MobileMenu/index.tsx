import React, { FC } from 'react';
import Box from './../Box/index';
import cl from './index.module.sass';

import Stack from '../Stack';
import MenuItem from '../MenuItem';
import Img from './../Img/index';
interface MobileMenuProps{
    opened:boolean,
    setOpened:React.Dispatch<React.SetStateAction<boolean>>,
    mobRef?:React.RefObject<HTMLDivElement>
}
const MobileMenu:FC<MobileMenuProps> = ({opened,mobRef,setOpened}) => {
    
    const postList=[
        {
            name:'Post Header',
            link:'#'
        },
        {
            name:'Post Header',
            link:'#'
        },
        {
            name:'Post Header',
            link:'#'
        },
        {
            name:'Post Header',
            link:'#'
        },
        {
            name:'Post Header',
            link:'#'
        },
    ]
    return (
        <Box  pt={30} boxRef={mobRef} classes={opened==false?cl.mobileMenu:`${cl.mobileMenu} ${cl.active}`}>
            <Box classes={cl.menuTop} mb={10} pb={10}>
                <Stack justify='space-between'>
                    <Img cls={cl.menuTopImg} alt='Лого' src='/img/header/Logo.svg' width={161} height={24}/>
                    <Img cls={cl.closeMenu} clickHandler={()=>setOpened(false)} alt='Лого' src='img/icons/MenuClose.svg' width={18} height={18}/>
                </Stack>
            </Box>
          <Box pl={20} pr={10}>
            <Stack align='start' dir='col' spacing='16px'>
                <MenuItem title='Demos'/>
                <MenuItem submenu={postList} title='Post'/>
                <MenuItem title='Features'/>
                <MenuItem title='Categories'/>
                <MenuItem title='Shop'/>
                <MenuItem title='Buy Now'/>
            </Stack>
            </Box>  
            
        </Box>
    );
};

export default MobileMenu;