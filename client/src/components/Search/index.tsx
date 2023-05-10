import React from 'react';
import cl from './index.module.sass';
// import { useOnClickOutside, useOutside } from '../../hooks';
interface ISearchProps{
    inputValue:string
    inputHandler:React.ChangeEventHandler<HTMLInputElement>,
    // rootEl:React.MutableRefObject<HTMLDivElement | null>,
    opened:boolean,
    searchRef?:React.RefObject<HTMLDivElement>
    setOpened:React.Dispatch<React.SetStateAction<boolean>>,
}
const Search:React.FC<ISearchProps> = ({opened,setOpened,searchRef,inputValue,inputHandler}) => {
    const inputRef=React.useRef< HTMLInputElement |null >(null)
    
   
    React.useEffect(()=>{   
        if(inputRef.current!=null){
            inputRef.current.focus()
        }
        return()=>{
            if(inputRef.current!=null){
                inputRef.current.blur()
            }
        }
    },[])
    return (
        <div ref={searchRef} className={cl.search}>
        <input placeholder='Поиск...' onChange={inputHandler} value={inputValue} ref={inputRef} className={cl.search__input} type="text" />
        </div>
    );
};

export default Search;