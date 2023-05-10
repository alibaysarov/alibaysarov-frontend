import React, { FC } from 'react';
import { useTheme } from '../../hooks';
import { toRem } from '../../utils';

interface TypographyProps{
    tag?:string,
    children:React.ReactNode
    classes?:string,
    color?:string,
    fontSize?:number
    style?:React.CSSProperties
}
interface IStyleType{
    fontSize:string | 0,
    color:string | undefined,
    
}
const Typography:FC<TypographyProps> = ({style,tag='p',color='primary',fontSize=16, classes,children}) => {
    const {colors}=useTheme()
    const getColor=(color:string)=>{
        for(const [ key,val] of Object.entries(colors)){
            if(key==color){
                return val
            }
        }
    }
    const styles:IStyleType={
        fontSize:toRem(fontSize),
        color:getColor(color)
    }
    const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
    return (
        <CustomTag style={{...style, ...styles}} className={classes} >{children}</CustomTag>
    );
};

export default Typography;