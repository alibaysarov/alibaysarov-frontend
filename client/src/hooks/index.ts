import { useContext,useState,useRef,useEffect, MutableRefObject } from "react"
import ThemeContext from "../context"

export const useTheme=()=>{
    return useContext(ThemeContext)
}
export const useOutside =(initVal:boolean)=>{
  const [show,setShow]=useState(initVal)
  const ref=useRef<HTMLDivElement>(null)
  const initRef=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const outSideClickFunc=(e:MouseEvent| TouchEvent)=>{
      const {current}=ref
      console.log(initRef.current);
      if(current!= null && initRef.current!=null){
        if(current.contains(e.target as HTMLElement)==false && initRef.current.contains(e.target as HTMLElement)==false ){
          console.log('Outside');
          setShow(false)
        }else{
          console.log('inSide');
        }
      }
      
    }
    if(show==false){
      return
    }else{
      
      document.addEventListener('click',outSideClickFunc,true)
    }
    
    
    return ()=>{
      
      document.removeEventListener('click',outSideClickFunc,true)
    }
  },[show])
  return {ref,initRef,show,setShow}
}
export const  useOnClickOutside=(ref:MutableRefObject<HTMLDivElement | null> |null, handler:()=>void,initVal:boolean)=> {
  useEffect(
    () => {
      if(initVal==false){
        return
      }else{

        const listener = (event:MouseEvent| TouchEvent) => {
          // Do nothing if clicking ref's element or descendent elements
          if(ref?.current!=null){
            if ( ref.current.contains(event.target as HTMLElement)) {
              return;
            }
            handler();
          }
          
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };

      }
      
    },
    
    [ref, handler,initVal]
  );
}

export const  useMediaQuery=(query: string): boolean => {
    const getMatches = (query: string): boolean => {
      // Prevents SSR issues
      if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches
      }
      return false
    }
  
    const [matches, setMatches] = useState<boolean>(getMatches(query))
  
    function handleChange() {
      setMatches(getMatches(query))
    }
  
    useEffect(() => {
      const matchMedia = window.matchMedia(query)
  
      // Triggered at the first client-side load and if query changes
      handleChange()
  
      // Listen matchMedia
      if (matchMedia.addListener) {
        matchMedia.addListener(handleChange)
      } else {
        matchMedia.addEventListener('change', handleChange)
      }
  
      return () => {
        if (matchMedia.removeListener) {
          matchMedia.removeListener(handleChange)
        } else {
          matchMedia.removeEventListener('change', handleChange)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
  
    return matches
  }
  
export const usePageScroll=(mediaObj:boolean,scrollHeight=200)=>{
  const [fixed,setFixed]=useState<boolean>(false)
  useEffect(()=>{
    const handler=()=>{
        if(mediaObj==true&& window.scrollY>scrollHeight){
            setFixed(true)
        }else{
            setFixed(false)
        }
    }
    window.addEventListener('scroll',handler)
    return ()=>window.removeEventListener('scroll',handler)
},[window.scrollY,mediaObj,scrollHeight])
return {fixed}
}