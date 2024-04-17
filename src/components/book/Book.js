import React from 'react';
import BookChildClass from './BookChildClass';
import BookChild from './BookChild';
import BookChildReview from './BookChildReview';
import './Book.css';

function Book() {
    const bookData = {
        title: "Кобзар",
        author: "Тарас Шевченко",
        genre: "Поезія",
        pages: 352,
        reviews: [
          "Шедевр української літератури, який несе глибокий зміст і національний дух.",
          "Читаючи Кобзара, переживаєш всю складність української історії та відчуваєш багатофакторність української душі.",
          "Книга, яка залишає незабутнє враження і відкриває нам усім справжню сутність України."
        ]
      };

    return (
        <div className='container'>
            <BookChild className='book-title' name={bookData.title}  />
            <BookChildClass className='book-info' description={"Autor: " + bookData.author}/>
            <BookChildClass className='book-info' description={"Genre: " + bookData.genre}/>
            <BookChildClass className='book-info' description={"Number of pages: " + bookData.pages}/>
            <BookChild name="Reviews"  />
            <ul className='reviews-list'>
                {bookData.reviews.map((review, index) => (
                    <BookChildReview key={index} description={review}/>
                ))}
            </ul>
        </div>
    );
}

export default Book;