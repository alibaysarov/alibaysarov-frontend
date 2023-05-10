import React, { FC } from 'react';
import { toRem } from '../../utils';
interface BoxProps{
    children:React.ReactNode,
    style?:React.CSSProperties
    p?:number
    py?:number
    pt?:number
    pb?:number
    px?:number
    pl?:number
    pr?:number
    m?:number
    my?:number
    mt?:number
    mb?:number
    mx?:number
    ml?:number
    mr?:number
    type?:string,
    classes?:string,
    onClick?:React.MouseEventHandler<HTMLDivElement>|any,
    boxRef?:React.RefObject<HTMLDivElement>
}
const Box:FC<BoxProps> = ({boxRef,onClick,style,type,classes,children,p,py,px,pl,pr,pt,pb,m,mx,mr,ml,mt,mb,my}) => {

    
    
    const styles={
        ...style,
        margin:toRem(m),
        marginTop:toRem(my)||toRem(mt),
        marginBottom:toRem(my)||toRem(mb),
        marginRight:toRem(mx)||toRem(mr),
        marginLeft:toRem(mx)||toRem(ml),
        width:type=='fluid'?'100%':'',
        padding:toRem(p),
        paddingTop:toRem(py)||toRem(pt),
        paddingBottom:toRem(py)||toRem(pb),
        paddingRight:toRem(px)||toRem(pr),
        paddingLeft:toRem(px)||toRem(pl),
    }
    return (
        <div ref={boxRef} style={styles} onClick={onClick} className={`${classes}`}>
            {children}
        </div>
    );
};

export default Box;