import React, { FC } from 'react';
import cl from './index.module.sass';
import { toRem } from '../../utils';
interface LinkProps{
    href:string | undefined,
    children:React.ReactNode,
    classes?:string
    fontSize?:number
}
const Link:FC<LinkProps> = ({fontSize=16,classes,href,children}) => {
    const styles={
        fontSize:toRem(fontSize)
    }
    return (
        <a style={styles} href={href} className={`${cl.link} ${classes}`}>
            {children}
        </a>
    );
};

export default Link;