'use client'
import { BookContext, initialState } from '@/context/BookContext'
import { Book, Status } from '@/types'
import React, { ReactNode, useContext, useState } from 'react'

type Props = {
    children:ReactNode
}

const BooksProvider = ({children}: Props) => {
    const [books, setBooks] = useState(initialState.books)
    const addBook = (book: Book) => {
        // Implement logic to add user to users list and update state
        setBooks([...books, book]);
      };
    
    const updateBook = (book: Book, status: Status) => {
      // Implement logic to update user in users list and update state
      setBooks(books.map((_book) =>
          book.id === _book.id ? { ...book, status:status } : _book
        )
      );
    };
    const deleteBook = (id:number) => {
      setBooks(books.filter(book => book.id != id))
    }
  return (
    <BookContext.Provider
    value={{
      books,
      addBook,
      updateBook,
      deleteBook
    }}
  >
    {children}
  </BookContext.Provider>
  )
}

export default BooksProvider