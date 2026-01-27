import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'

const Search = () => {

  const {searchID} = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setVideos(result.items)
    })
    .catch(error => console.log(error))
  },[searchID])

  return (
    <Main>
      <section id='searchPage'>
        <div className='video__inner search '>
           <VideoSearch videos={videos}/>
        </div>
      </section>
    </Main>
  )
}

export default Search