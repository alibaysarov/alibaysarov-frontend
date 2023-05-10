
import Box from '../Box';
import Stack from '../Stack';
import MenuItem from '../MenuItem';
import { useMediaQuery, usePageScroll } from '../../hooks';
import cl from './index.module.sass';


const NavMenu = () => {
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
    const isTablet=useMediaQuery('(max-width:768px)')
    const pcProps={
        spacing:isTablet?'15px':'32px',
        justify:'center',
        dir:isTablet?'col':'row'
    }

    const isPc=useMediaQuery('(min-width:768px)')
    const {fixed}=usePageScroll(isPc)
    
    
    return (
        <Box classes={fixed? `${cl.navMenu} ${cl.fixed}`:`${cl.navMenu}`}>
        <Stack {...pcProps} >
          <MenuItem title='Demos'/>
          <MenuItem submenu={postList} title='Post'/>
          <MenuItem title='Features'/>
          <MenuItem title='Categories'/>
          <MenuItem title='Shop'/>
          <MenuItem title='Buy Now'/>
        </Stack>
      </Box>
    );
};


    
    export default NavMenu;