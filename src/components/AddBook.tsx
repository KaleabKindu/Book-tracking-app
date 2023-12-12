'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChangeEvent, useContext, useState } from "react"
import { BookContext } from "@/context/BookContext"

type Props = {}

const AddBook = (props: Props) => {
    const { books, addBook } = useContext(BookContext)
    const [ title, setTitle ] = useState('')
    const handleClick = () => {
        addBook({id:books.length + 1, title:title, status:'to-read'})
        setTitle('')
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
        setTitle(e.target.value)
    }
    console.log(title)
  return (
    <div className='flex gap-3 items-center px-1'>
        <Input value={title} onChange={(e) => handleChange(e)} className="w-[70vw] lg:w-[50vw] " />
        <Button onClick={handleClick}>Add Book</Button>
    </div>
  )
}

export default AddBook