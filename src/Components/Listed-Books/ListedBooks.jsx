import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { getStoreBook } from "../Utilits/LocalStroge";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { getStoreWish } from "../Utilits/wishStroage";







const ListedBooks = () => {
    const books = useLoaderData()
    const [displayBook, setDisplayBook]= useState([]);

    const [bookRead, setBookRead] = useState([]);

    const handleFilterText = filter =>{
        if(filter === 'all'){
            setDisplayBook(bookRead)
        }
        else if (filter ==='Fantasy'){
            const fantasyBooks = bookRead.filter(book => book.category === 'Fantasy');
            setDisplayBook(fantasyBooks)
        }
        else if( filter === 'Fiction'){
            const fictionBook = bookRead.filter(book => book.category ==='Fiction')
            setDisplayBook(fictionBook)
        }
        else if( filter === 'Thriller'){
            const ThrillerBook = bookRead.filter(book => book.category ==='Thriller')
            setDisplayBook(ThrillerBook);
        }

    }
    useEffect(()=>{
        const storeBookIds = getStoreBook()
        if(books.length > 0){
            const ReadBook = books.filter(book => storeBookIds.includes(book.bookId));
           
            setBookRead(ReadBook);
            setDisplayBook(ReadBook);

        }
      
    },[books]);
    const [wishList, setWishList] = useState([]);

    const handleFilterWish = filter =>{
        if(filter === 'all'){
            setDisplayBook(wishList)
        }
        else if (filter ==='Fantasy'){
            const fantasyBooks = wishList.filter(book => book.category === 'Fantasy');
            setDisplayBook(fantasyBooks)
        }
        else if( filter === 'Fiction'){
            const fictionBook = wishList.filter(book => book.category ==='Fiction')
            setDisplayBook(fictionBook)
        }
        else if( filter === 'Thriller'){
            const ThrillerBook = wishList.filter(book => book.category ==='Thriller')
            setDisplayBook(ThrillerBook);
        }
    }
 
    useEffect(()=>{
        const storeWish = getStoreWish();
        if(books.length > 0){
            const wishBook = books.filter(book => storeWish.includes(book.bookId));
            setWishList(wishBook)
            setDisplayBook(wishBook)
        }
    },[books])
    
    
    // const {image,bookName,author,tags,yearOfPublishing,category,rating,totalPages,publisher} = bookRead;
    // console.log(bookRead)
    return (
        <div>
            
          <div className="bg-gray-200 p-8 text-center rounded-lg ">
                <h1 className="text-3xl font-bold">Books </h1>
            </div>
            <div className="text-center mt-5">
                <details className="dropdown ">
                    <summary className="m-1 text-white text-xl btn bg-[#23BE0A]">Sort By <FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box hover:bg-green-100">
                        <li onClick={() => handleFilterText('all')}><a onClick={() => handleFilterWish ('all')}>All</a></li>
                        <li  onClick={() => handleFilterText('Fiction')}><a onClick={() => handleFilterWish ('Fiction')}>Fiction</a></li>
                        <li  onClick={() =>handleFilterText('Fantasy')}><a onClick={() => handleFilterWish ('Fantasy')}>Fantasy</a></li>
                        <li  onClick={() =>handleFilterText('Thriller')}><a onClick={() => handleFilterWish ('Thriller')}>Thriller</a></li>
                    </ul>
                </details>
            </div>
            <div role="tablist" className=" mt-16 tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Read" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> 

                    {
                        displayBook.map((book,idx) => (<div className="flex gap-4 border-2 border-gray-200 rounded-xl p-4" key={idx}>
                             <div className="py-4 w-[230px] bg-gray-100  rounded-xl">
                                    <img className="h-[170px] w-[130px] mx-auto "  src={book.image} alt="" />
                             </div> 
                             <div className="flex-grow">
                             <h1 className="text-2xl font-bold"> {book.bookName} </h1>
                             <p><span className="font-medium">By: </span> {book.author}</p>
                              <div className="flex gap-5 mt-3  "> <span className="text-xl font-semibold ">Tags:</span>
                                {
                                     book.tags.map((tag,idx) => (<p className="text-green-500  rounded-xl mr-2 bg-green-50 px-4" key={idx}>{`# ${tag}`}</p>) )
                                }
                                <p><span className="font-medium">Year of Publishing: </span>
                                  {book.yearOfPublishing}
                                </p>
                               </div>
                               <div className="flex gap-8 mt-4 border-b-2 border-gray-200 pb-4">
                                  <p className="flex items-center "> <IoPeople /> <span className="font-semibold mr-2">Publisher:  </span> {book.publisher}</p>
                                  <p className="flex items-center"> <RiPagesLine /> <span className="font-semibold mr-2">Pages: </span> {book.totalPages} </p>
                               </div>
                               <div className="flex gap-6 mt-3">
                                <p className="bg-[#328EFF26] text-blue-400 p-2 rounded-xl"><span className="font-semibold">Category:</span> {book.category} </p>
                                <p className="bg-[#FFAC3326] text-orange-400 p-2 rounded-xl"><span>Rating</span> {book.rating} </p>
                                <button className="bg-[#23BE0A] text-white p-2 rounded-xl">View Details</button>
                               </div>
                         </div> 
                        
                        </div>
                           ))
                    }
                   

                    
                    
                     </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="WishList" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                     
                       {
                          displayBook.map((book,idx) => (<div className="flex gap-4 border-2 border-gray-200 rounded-xl p-4" key={idx}>
                             
                             <div className="py-4 w-[230px] bg-gray-100  rounded-xl">
                                    <img className="h-[170px] w-[130px] mx-auto "  src={book.image} alt="" />
                             </div> 
                             <div className="flex-grow">
                             <h1 className="text-2xl font-bold"> {book.bookName} </h1>
                             <p><span className="font-medium">By: </span> {book.author}</p>
                              <div className="flex gap-5 mt-3  "> <span className="text-xl font-semibold ">Tags:</span>
                                {
                                     book.tags.map((tag,idx) => (<p className="text-green-500  rounded-xl mr-2 bg-green-50 px-4" key={idx}>{`# ${tag}`}</p>) )
                                }
                                <p><span className="font-medium">Year of Publishing: </span>
                                  {book.yearOfPublishing}
                                </p>
                               </div>
                               <div className="flex gap-8 mt-4 border-b-2 border-gray-200 pb-4">
                                  <p className="flex items-center "> <IoPeople /> <span className="font-semibold mr-2">Publisher:  </span> {book.publisher}</p>
                                  <p className="flex items-center"> <RiPagesLine /> <span className="font-semibold mr-2">Pages: </span> {book.totalPages} </p>
                               </div>
                               <div className="flex gap-6 mt-3">
                                <p className="bg-[#328EFF26] text-blue-400 p-2 rounded-xl"><span className="font-semibold">Category:</span> {book.category} </p>
                                <p className="bg-[#FFAC3326] text-orange-400 p-2 rounded-xl"><span>Rating</span> {book.rating} </p>
                                <button className="bg-[#23BE0A] text-white p-2 rounded-xl">View Details</button>
                               </div>
                           </div> 
                          </div>))
                       } 

                    </div>

               
              </div>
           
      </div>
    );
};

export default ListedBooks;