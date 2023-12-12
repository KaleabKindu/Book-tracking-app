'use client'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Book } from "@/types"
import { useContext } from "react"
import { BookContext } from "@/context/BookContext"
import { MdDelete } from "react-icons/md";

type Props = {}


const Books = (props: Props) => {
    const {books} = useContext(BookContext)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90vw] pt-10'>
        <div>
            <div className="text-xl font-bold px-5">To Read</div>
            {
                books.filter(book => book.status === 'to-read').map((book, index) => 
                    <Book key={index} book={book}/>
                )
            }
        </div>
        <div>
            <div className="text-xl font-bold px-5">In Progress</div>
            {
                books.filter(book => book.status === 'in-progress').map((book, index) => 
                    <Book key={index} book={book}/>
                )
            }
        </div>
        <div>
            <div className="text-xl font-bold px-5">Completed</div>
            {
                books.filter(book => book.status === 'complete').map((book, index) => 
                    <Book key={index} book={book}/>
                )
            }
        </div>
    </div>
  )
}

export default Books




type BookProps = {
    book:Book
}

const Book = ({book}: BookProps) => {
    const {updateBook, deleteBook} = useContext(BookContext)
    const handleClick = (book:Book) => {
        if(book.status === 'to-read'){
            updateBook(book, 'in-progress')
        }else if (book.status === 'in-progress'){
            updateBook(book, 'complete')
        }else{
            updateBook(book, 'in-progress')
        }
    }
  return (
    <Card className="m-2">
        <CardHeader className="flex flex-row justify-between">
            <CardTitle>{book.title}</CardTitle>
            <Button variant={'ghost'} onClick={() => deleteBook(book.id)}><MdDelete size={30}/></Button>
        </CardHeader>
        <CardContent>
          <Button onClick={() => handleClick(book)}>{book.status === 'to-read' ? 'Read':book.status === 'in-progress' ? 'Complete':'Reread'}</Button>
        </CardContent>
    </Card>

  )
}
