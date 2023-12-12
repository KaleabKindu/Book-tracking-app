import { Book, Status } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webApi = createApi({
  reducerPath: 'webApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({ 
    getBooks: builder.query<Book[], void>({
        query: () => '/books'
    }),
    updateBook: builder.mutation<void, { id:number, status:Status }>({
        query: ({id, status}) => ({
            url:`/books/${id}?status=${status}`,
            method:'PUT'
        })
    }),
    addBook: builder.mutation<void, Book>({
        query: (book) => ({
            url:'/books',
            method:'POST',
            body:book
        })
    }),
    deleteBook: builder.mutation<void, string>({
        query: (id) => ({
            url:`/books/${id}`,
            method:'DELETE'
        })
    }),
  }),
})


export const { 
    useGetBooksQuery, 
    useUpdateBookMutation, 
    useAddBookMutation, 
    useDeleteBookMutation
 } = webApi