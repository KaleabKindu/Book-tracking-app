import { Book, Status } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webApi = createApi({
  reducerPath: 'webApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({ 
    getBooks: builder.query<Book[], void>({
        query: () => '/books'
    }),
    updateBook: builder.mutation<void, { id:string, status:Status }>({
        query: ({id, status}) => ({
            url:`books/${id}?status=${status}`,
            method:'PUT'
        })
    }),
    addBook: builder.mutation<void, string>({
        query: (title) => ({
            url:'books',
            method:'POST',
            body:{title:title}
        })
    }),
    deleteBook: builder.mutation<void, string>({
        query: (id) => ({
            url:`books/${id}`,
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