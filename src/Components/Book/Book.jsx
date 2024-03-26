import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
const Book = ({book}) => {
    const {bookName,image ,tags ,author,category,rating} = book ;
    return (
        <div  className="mt-8 ">
         <div className="card  p-5 bg-base-100 shadow-xl border-2 border-gray-300 text-start ">
                <figure className="bg-base-200 rounded-xl"><img className="h-[230px] p-6" src={image} alt={bookName} /></figure>
                <div className="card-body flex flex-col">
                    <div className="flex-grow">
                    <div className="flex">
                    {
                        tags.map((tag,idx) => (<p className="text-green-500 rounded-xl mr-2 bg-base-200" key={idx}>{`# ${tag}`}</p>) )
                     }
                    </div>
                    <div className="pb-4 border-b-2 border-dashed border-gray-200">
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
    );
};
Book.propTypes ={
    book : PropTypes.object
}
export default Book;