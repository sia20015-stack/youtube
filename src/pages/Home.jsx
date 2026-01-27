import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import VideoSlider from '../components/video/VideoSlider'
import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'
import { musicText } from '../data/music'
import { todayText } from '../data/today'

const Home = () => {
  return (
    <Main>
      <Today videos={todayText} id='today'/>
      <Music videos={musicText} title='🎧추천 음악' id='music'/>
      <VideoSlider videos={movieText} title='📽 추천 영화' id='movie'/>
      <VideoSlider videos={BookText} title='📗 추천 도서' id='book'/>
      <VideoSlider videos={AnimeText} title='✨ 추천 애니' id='anime'/>
    </Main>
  )
}

export default Home