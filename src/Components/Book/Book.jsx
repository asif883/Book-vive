import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId,bookName,image ,tags ,author,category,rating} = book ;

  

    return (  
        <Link to={`/bookDetails/${bookId}`} >
            <div className="mt-8 ">       
         <div className="card  p-5 bg-base-100  border-2 border-green-100 text-start ">
                <figure className="bg-base-200 rounded-xl"><img className="h-[230px] p-6" src={image} alt={bookId} /></figure>
                <div className="card-body flex flex-col">
                    <div className="flex-grow">
                    <div className="flex">
                    {
                        tags.map((tag,idx) => (<p className="text-green-500 rounded-xl mr-2 bg-base-200" key={idx}>{`# ${tag}`}</p>) )
                     }
                    </div>
                    <div className="mt-2 pb-4 border-b-2 border-dashed border-gray-200 space-y-2">
                        <h2 className="card-title text-2xl">{bookName}</h2>
                        <p className="font-medium ">By: {author}</p>
                    </div>
                    </div>
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <p className="flex items-center gap-2">{rating} <FaRegStar /> </p>
                    </div>
                    
            </div>
         </div>
         
        </div>
        </Link>
      
    );
};
Book.propTypes ={
    book : PropTypes.object
}
export default Book;