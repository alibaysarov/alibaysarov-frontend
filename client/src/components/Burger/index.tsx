import React, { FC } from 'react';
import cl from './index.module.sass';
interface BurgerProps{
    opened:boolean,
    burgerRef?:React.RefObject<HTMLDivElement>
    setOpened:React.Dispatch<React.SetStateAction<boolean>>
}
const Burger:FC<BurgerProps> = ({opened,burgerRef,setOpened}) => {
    // const[open,setOpen]=React.useState<boolean>(false)
    const clickHandler=()=>{
        if(opened==true){
            setOpened(false)
        }else{
            setOpened(true)
        }
    }
    React.useEffect(()=>{
        
        if(opened==true){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow=''
        }
        
            
        return ()=>{document.body.style.overflow=''}
    },[opened])
    return (
        <div ref={burgerRef} onClick={clickHandler} className={opened==false?cl.burger:`${cl.burger} ${cl.active}`}>
            <div className={cl.burger__line}></div>
            <div className={cl.burger__line}></div>
            <div className={cl.burger__line}></div>
        </div>
    );
};

export default Burger;