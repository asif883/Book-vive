import { useLoaderData, useParams } from "react-router-dom";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";


const Read = () => {
    const books = useLoaderData()
    // console.log (books)
    const {bookId} = useParams();
    const readBook = books.find((book)=> book.bookId == bookId);
    const {image,bookName,author,tags,yearOfPublishing,category,rating,totalPages,publisher} = readBook;
    return (
        <div>
            <div className="mt-10">
                <div role="tablist" className="tabs tabs-lifted">
                
                        <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-medium" aria-label="Read" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                       <div className="flex gap-4 border-2 border-gray-200 rounded-xl p-4">
                            <div className="py-4 w-[230px] bg-gray-100  rounded-xl">
                                    <img className="h-[170px] w-[130px] mx-auto "  src={image} alt="" />
                           </div> 
                          <div className="flex-grow">
                             <h1 className="text-2xl font-bold"> {bookName} </h1>
                             <p><span className="font-medium">By: </span> {author}</p>
                              <div className="flex gap-5 mt-3  "> <span className="text-xl font-semibold ">Tags:</span>
                                {
                                     tags.map((tag,idx) => (<p className="text-green-500  rounded-xl mr-2 bg-green-50 px-4" key={idx}>{`# ${tag}`}</p>) )
                                }
                                <p><span className="font-medium">Year of Publishing: </span>
                                  {yearOfPublishing}
                                </p>
                               </div>
                               <div className="flex gap-8 mt-4 border-b-2 border-gray-200 pb-4">
                                  <p className="flex items-center "> <IoPeople /> <span className="font-semibold mr-2">Publisher:  </span> {publisher}</p>
                                  <p className="flex items-center"> <RiPagesLine /> <span className="font-semibold mr-2">Pages: </span> {totalPages} </p>
                               </div>
                               <div className="flex gap-6 mt-3">
                                <p className="bg-[#328EFF26] text-blue-400 p-2 rounded-xl"><span className="font-semibold">Category:</span> {category} </p>
                                <p className="bg-[#FFAC3326] text-orange-400 p-2 rounded-xl"><span>Rating</span> {rating} </p>
                                <button className="bg-[#23BE0A] text-white p-2 rounded-xl">View Details</button>
                               </div>
                          </div>

                       </div>
                        
                        </div>
                    
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-medium" aria-label="WishList" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        
                    <div className="flex gap-4 border-2 border-gray-200 rounded-xl p-4">
                            <div className="py-4 w-[230px] bg-gray-100  rounded-xl">
                                    <img className="h-[170px] w-[130px] mx-auto "  src={image} alt="" />
                           </div> 
                          <div className="flex-grow">
                             <h1 className="text-2xl font-bold"> {bookName} </h1>
                             <p><span className="font-medium">By: </span> {author}</p>
                              <div className="flex gap-5 mt-3  "> <span className="text-xl font-semibold ">Tags:</span>
                                {
                                     tags.map((tag,idx) => (<p className="text-green-500  rounded-xl mr-2 bg-green-50 px-4" key={idx}>{`# ${tag}`}</p>) )
                                }
                                <p><span className="font-medium">Year of Publishing: </span>
                                  {yearOfPublishing}
                                </p>
                               </div>
                               <div className="flex gap-8 mt-4 border-b-2 border-gray-200 pb-4">
                                  <p className="flex items-center "> <IoPeople /> <span className="font-semibold mr-2">Publisher:  </span> {publisher}</p>
                                  <p className="flex items-center"> <RiPagesLine /> <span className="font-semibold mr-2">Pages: </span> {totalPages} </p>
                               </div>
                               <div className="flex gap-6 mt-3">
                                <p className="bg-[#328EFF26] text-blue-400 p-2 rounded-xl"><span className="font-semibold">Category:</span> {category} </p>
                                <p className="bg-[#FFAC3326] text-orange-400 p-2 rounded-xl"><span>Rating</span> {rating} </p>
                                <button className="bg-[#23BE0A] text-white p-2 rounded-xl">View Details</button>
                               </div>
                          </div>

                       </div>
                    
                    </div>

                    
             </div>
            </div>
        </div>
    );
};

export default Read;