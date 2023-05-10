import React, { FC } from 'react';
interface ImgProps{
    src?:string
    srcSet?:string,
    alt:string,
    cls?:string
    width?:number,
    height?:number,
    clickHandler?:React.MouseEventHandler<HTMLElement> 
    
}
const Img:FC<ImgProps> = ({clickHandler,src,srcSet,alt,cls,width,height}) => {
    return (
        <picture>
            <source onClick={clickHandler} width={width} height={height} srcSet={srcSet} />
            <img onClick={clickHandler} className={cls} width={width} height={height} src={src} alt={alt} />
        </picture>
    );
};

export default Img;