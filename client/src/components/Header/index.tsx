
import React from 'react';
import Stack from '../Stack';
import Box from '../Box';
import Img from '../Img';
import NavMenu from '../NavMenu';
import cl from './index.module.sass';
import Search from '../Search';
import {useMediaQuery, useOutside, usePageScroll } from '../../hooks';
import Burger from '../Burger';
import MobileMenu from '../MobileMenu';
interface HeaderProps{
  inputValue:string,
  inputHandler:React.ChangeEventHandler<HTMLInputElement>
}
const Header:React.FC<HeaderProps> = ({inputHandler,inputValue}) => {
  
  
  const {ref:mobRef,initRef:burgerRef,show:mobileShow,setShow:setMobileShow}=useOutside(false)
  // const [searchOpen,setSearchOpen]=React.useState<boolean>(false)
  const {ref,initRef,show,setShow}=useOutside(false)
  const toggleSearch=()=>{
    setShow(prev=>!prev)
  }
  const isTablet=useMediaQuery('(max-width:768px)')
    const {fixed}=usePageScroll(isTablet)
    return (
      <Box mb={48}>
      <Box classes={fixed?`${cl.mobMenu} ${cl.active}`:cl.mobMenu} pt={29} pb={25.5} px={isTablet?0:5}>
          <Stack classes={cl.stack} justify={isTablet?'center':'space-between'}>
            {
              isTablet&& <Burger burgerRef={burgerRef} opened={mobileShow} setOpened={setMobileShow}/>
            }
            <Stack style={{width:'100%'}} justify='center'>
              <Img width={181} height={27} alt='Логотип' src={'public/img/header/Logo.svg'} srcSet='public/img/header/Logo.svg'/>
            </Stack>
            <Box boxRef={initRef} classes={cl.search}>
              <Img clickHandler={toggleSearch} cls={cl.search__img} width={16} height={16} alt='Поиск' src='public/img/icons/search.svg' srcSet='public/img/icons/search.svg'/>
              {
                show&&
                <Search  setOpened={setShow} opened={show} searchRef={ref} inputValue={inputValue} inputHandler={inputHandler}/>
              
              }
            </Box>
          </Stack>
      </Box>
      {
          isTablet
          ?<MobileMenu mobRef={mobRef} opened={mobileShow} setOpened={setMobileShow}/>
          :<NavMenu/> 
      }
      </Box>
        
           
        
    );
};

export default Header;