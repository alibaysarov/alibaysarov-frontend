import { FC } from 'react';
import cl from './index.module.sass';
import Stack from '../Stack';

import Link from '../Link';
import Img from './../Img/index';
import Box from '../Box';
import Typography from '../Typography';
import { useMediaQuery } from '../../hooks';
interface SubmenuItemProps{
  name:string,
  link:string
}

const SubMenuItem:FC<SubmenuItemProps> =({name,link})=>{
  const isTablet=useMediaQuery('(max-width:768px)')
  
  return(
    <Stack classes={cl.subMenu__item} justify='space-between' spacing={'55px'}>
      <Link classes={cl.subMenu__link} href={link}>{name}</Link>
      {!isTablet&&
        <Img src='/public/img/icons/arrow-rt.svg' height={8} width={5} alt='More' />
      }
    </Stack>
  )
}


interface MenuItemProps{
  title?:string
  submenu?:SubmenuItemProps[],
  link?:string | undefined,
  classes?:string
}

const MenuItem:FC <MenuItemProps> =({link,title,submenu})=> {
  const hasSubMenu=()=>{
    if(submenu){
      return submenu.length>0?true: false;
    }
  }
  const isTablet=useMediaQuery('(max-width:768px)')
  // const [subMenuOpen,setSubMenuOpen]=React.useState<boolean>(false)
  // const subMenuHandler=()=>{
    
  //   if(isTablet){
  //     setSubMenuOpen(prev=>!prev)
  //   }
  // }
  const arrow={
    width:isTablet?16:8,
    height:isTablet?10:5
  }
  const subMenuBoxProps={
    px:!isTablet?20:10,
    py:!isTablet?20:10
  }
    return (
    <Box pb={15}  style={{
      width:isTablet?'100%':''
    }} classes={`${cl.menuItem} ${hasSubMenu()&& cl.hasChildren}`}>
      <Stack  spacing='5px' align='center' justify={isTablet?'space-between':'start'}>
        {
          link!=''
          ?<Link fontSize={isTablet?20:16} href={link}>{title}</Link>
          :<Typography tag='span' fontSize={isTablet?20:16} color='primary' >{title}</Typography>
        }
        {hasSubMenu()&&<Img {...arrow} src='/public/img/icons/arrow-dn.svg' srcSet='/public/img/icons/arrow-dn.svg' alt='Подробнее'/>}
      </Stack>
      {
        hasSubMenu()
        &&(
          <Box {...subMenuBoxProps} classes={cl.subMenu}>
            <Stack dir='col' spacing='16px'>
            {
              submenu&&submenu.map(el=> (
                <SubMenuItem {...el}/>
            ))
            }
            </Stack>
          </Box>
        )
      }
    </Box>
    );
  }

export default MenuItem;