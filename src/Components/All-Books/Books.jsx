import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
     const [books , setBooks] = useState([])
     
     useEffect(()=>{
        fetch ('books.json')
        .then( res => res.json())
        .then(data => setBooks(data))

     },[])
    return (
        <div>
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">Books</h1>
               <div className="grid gap-3 grid-cols-3">
                {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                }
               </div>
            </div>
        </div>
    );
};

export default Books;