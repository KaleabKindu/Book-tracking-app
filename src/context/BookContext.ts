'use client'
import { books } from '@/data';
import { Book, Status } from '@/types';
import { createContext } from 'react';


interface ContextState {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (book: Book, status: Status) => void;
  deleteBook: (id:number) => void;
}

export const initialState: ContextState = {
  books: books,
  addBook: (book: Book) => {
  },
  updateBook: (book: Book, status: Status) => {
  },
  deleteBook: (id:number) => {
    
  }
};

export const BookContext = createContext(initialState);

