import React,{FC} from 'react';
import cl from './index.module.sass';


interface IPopupProps {
    children:React.ReactNode
    active:boolean,
    onClose:()=>void
}

const Popup:FC<IPopupProps> = ({active,onClose,children}) => {
    
    React.useEffect(()=>{
        if(active==true){
            document.body.style.overflow='hidden'
        }else{

            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='auto'
        }
    },[active])
    return (
        <div className={active?`${cl.popup} ${cl.active}`:cl.popup} onClick={onClose}>
            <div onClick={e=>e.stopPropagation()} className={active?`${cl.popup__cnt} ${cl.active}`:cl.popup__cnt}>{children}</div>
        </div>
    );
};

export default Popup;