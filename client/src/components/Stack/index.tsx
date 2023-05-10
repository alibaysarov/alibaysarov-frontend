import React, { FC } from 'react';
import cl from './index.module.sass';
import { justifyItems,alignItems, direction } from './utils';
interface IStackProps{
    children:React.ReactNode,
    dir?:string
    align?:string,
    justify?:string,
    spacing?:string,
    style?:React.CSSProperties,
    wrap?:boolean
    classes?:string
}
const Stack:FC<IStackProps> = ({children,classes,wrap,style,dir,align,justify,spacing}) => {
    const cls=`${classes&&classes} ${cl.stack} ${wrap? cl.wrap: cl.nowrap} ${justifyItems(justify)} ${alignItems(align)} ${direction(dir)}`
    
    const styles={
        ...style,
        gap:spacing
    }

    return (
        <div style={styles} className={cls}>
            {children}
        </div>
    );
};

export default Stack;