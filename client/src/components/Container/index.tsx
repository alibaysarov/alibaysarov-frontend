import React, { FC } from 'react';
import cl from './index.module.sass';
interface IContainerProps{
    children:React.ReactNode
}

const Container:FC<IContainerProps> = ({children}) => {
    return (
        <div className={cl.container}>
            {children}
        </div>
    );
};

export default Container;