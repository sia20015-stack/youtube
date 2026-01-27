import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { AnimeText } from '../data/anime'
import VideoCard from '../components/video/VideoCard'

const Anime = () => {

  const[loading, setLoding] = useState(true);
        
        useEffect(()=>{
        setTimeout(()=>{
        setLoding(false)
        },300);
        },[])
          
  const videoClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id='anime' className={videoClass}>
        <h2>✨ 추천 애니</h2>
        <div className='video__inner'>     
          <VideoCard videos={AnimeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime