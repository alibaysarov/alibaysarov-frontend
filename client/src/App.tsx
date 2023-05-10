

import './App.sass'
import React from 'react';
import Container from './components/Container'
import Header from './components/Header'
import Content from './components/Content'
import { ICard } from './types';
import axios from './axios';




function App() {
  const [posts,setPosts]=React.useState<ICard[] | []>([])
  const [loaded,setLoaded]=React.useState<boolean>(false)
  const [inputVal,setInputVal]=React.useState<string>('')
  const searchHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
      setInputVal(e.target.value)
    
  }
  React.useEffect(()=>{
    const fetchPosts=async()=>{
        const {data}=await axios.get('/posts')
        setPosts(data);
        setLoaded(true)
    }
    fetchPosts()
},[])
const filteredPosts=posts.filter(el=>el.title.toLowerCase().includes(inputVal.toLowerCase())||el.text.toLowerCase().includes(inputVal.toLowerCase()))
  return (
   <>
   <Container>
    <Header inputHandler={searchHandler} inputValue={inputVal} />
    <Content loaded={loaded} posts={filteredPosts}/>
   </Container>
   </>
  )
}

export default App
