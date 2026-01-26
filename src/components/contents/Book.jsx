import React from 'react'
import { BookText } from '../../data/book'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <section id='book'>
      <h2>📗추천 책을 소개합니다.</h2>
      <div className='book__inner'>
        {BookText.map((book, key)=>(
          <div className='book' key={key}>
            <div className='book__thumb play__icon'>
              <Link to={`/book/$(book.bookID)`}>
                <img src={book.img} alt={book.title}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Book



