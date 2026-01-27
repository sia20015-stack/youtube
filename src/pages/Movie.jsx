import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'


import { movieText } from '../data/movie'

const Movie = () => {

  const[loading, setLoding] = useState(true);
    
      useEffect(()=>{
      setTimeout(()=>{
      setLoding(false)
      },300);
      },[])
      
  const videoClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id='movie' className={videoClass}>
        <h2>📽 추천 영화</h2>
        <div className='video__inner'>
          <VideoCard videos={movieText}/>
        </div>
      </section>
    </Main>
  )
}

export default Movie