
import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook } from "../Utilits/LocalStroge";
import { saveWishBook } from "../Utilits/wishStroage";


const BookDetails = () => {
    const books = useLoaderData();
    // console.log(books)
    const {bookId} = useParams();
     const idInt =parseInt(bookId);
    // console.log(idInt);
    const SingleBook = books.find((book) => book.bookId === idInt ); 
    // console.log(SingleBook) 
  
    const {bookName,author,image,category,review,tags,publisher,yearOfPublishing,totalPages,rating} = SingleBook;
    const handleRead = () => {
      saveReadBook(idInt);
      toast("Added To The Read-List");      
    }

    const handleWish= ()=>{
        saveWishBook(idInt);
        
          toast("Added to The WishList");
        
        
        
    }
    
    return (
       
       <div>
            <ToastContainer />
         <div className="mt-10 flex gap-8">
            <div className="h-[700px] w-[650px] bg-gray-100 rounded-xl ">
               <img className="h-[550px] w-[420px] mx-auto mt-16 " src={image} alt="" />
           </div>
           <div className="flex-grow">
             <h1 className="text-4xl font-bold">{bookName} </h1>
             <h2 className="text-xl font-medium text-gray-500 pb-6 border-b-2 border-gray-200">By: {author}</h2>
              <h2 className="text-2xl text-gray-500 pt-4 pb-6 border-b-2 border-gray-200">{category}</h2>
              <p className="pt-2"><span className="font-semibold">Review: </span>{review} </p>
               
              <div className="flex gap-5 mt-10  pb-10 border-b-2 border-gray-200"> <span className="text-xl font-semibold ">Tags:</span>
                {
                            tags.map((tag,idx) => (<p className="text-green-500 text-xl rounded-xl mr-2 bg-green-50 px-4" key={idx}>{`# ${tag}`}</p>) )
                }
              </div>
              <div className="mt-5 space-y-2 grid grid-cols-2 grid-rows-4">
                <p>Number Of pages</p>
                <p className="font-semibold">: {totalPages}</p>
                <p>Publisher </p>
                 <p className="font-semibold">: {publisher}</p>
                <p>Year Of publishing</p>
                <p className="font-semibold">: {yearOfPublishing}</p>
                <p>Rating</p>
                <p className="font-semibold">: {rating}</p>
              </div>
              
              <div className="mt-10">
               {/* <Link  to={`/listed books/${bookId}`}> */}
                  <button onClick={handleRead} className="px-6 py-3 border-2 border-gray-500 rounded-lg font-semibold mr-5 hover:bg-[#23BE0A] hover:text-white">Read</button>
               {/* </Link> */}
                
                    <button onClick={handleWish} className="px-6 py-3 bg-[#50B1C9] rounded-lg text-white font-medium hover:shadow-xl">WishList</button>
                    
               
               </div>
           </div>
        </div>
       </div>
    );
};


export default BookDetails;




