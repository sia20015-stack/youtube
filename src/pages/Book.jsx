import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { BookText } from '../data/book'

const Book = () => {

  const[loading, setLoding] = useState(true);
      
        useEffect(()=>{
        setTimeout(()=>{
        setLoding(false)
        },300);
        },[])
        
  const videoClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id='book' className={videoClass}>
        <h2>📗 추천 도서</h2>
        <div className='video__inner'>     
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book