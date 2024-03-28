
import { useLoaderData } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { comment } from "postcss";


const blog = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <div className="text-center mt-8 bg-base-200 p-4 rounded-xl">
               <h1 className="text-3xl font-bold">Blogs</h1>
            </div>
            {
                blogs.map((blog,idx) => <div className=" border-2 p-4 mt-8 border-green-100 rounded-xl" key={idx}>
                     <h1 className="text-4xl mt-4 font-bold">{blog.title}</h1>
                     <p className="mb-6 mt-2"><span className="font-semibold mr-2">Post Date:</span>{blog.date}</p>
                    <div className="w-[400px] mx-auto">
                        <img className=" h-[550px] " src={blog.image} alt="" />
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-3xl font-bold">{blog.bookName}</h1>
                        <h3 className="text-xl mt-1 font-medium text-green-300 pb-4 border-b-2 border-gray-200">By: {blog.author}</h3>
                        <p className="text-gray-500 mt-2"><span className="font-semibold text-purple-600">Content: </span>{blog.content}</p>
                        <h1 className="text-2xl text-purple-600 mt-6 font-bold">Comments:</h1>
                        {
                            blog.comments.map((comment,idx) => <div className="mt-3" key={idx}>
                                <div className="">
                                <div className="text-2xl flex gap-2 items-center ">
                                 < FaUserCircle />
                                 <h1 className="text-xl  font-semibold">{comment.user}</h1>
                                </div>
                                  <div>
                                  <p className="mt-2 text-purple-600">{comment.comment}</p>
                                  </div>
                                </div>
                               
                            </div>)
                        }
                        <div className="flex items-center gap-2 mt-3">
                            <p className="font-bold text-xl">Tags:</p>
                            <p className=" bg-purple-100 text-purple-600 py-2 px-4 rounded-xl">{blog.tags[0]}</p>
                            <p className=" bg-purple-100 text-purple-600 py-2 px-4 rounded-xl">{blog.tags[1]}</p>
                            <p className=" bg-purple-100 text-purple-600 py-2 px-4 rounded-xl">{blog.tags[2]}</p>
                         </div>
                      <div className=" flex items-center justify-between mt-6">
                         <p className=" bg-sky-100 text-sky-600 py-2 px-4 rounded-xl">Category:#{blog.category}</p>
                         <button className="border-2 border-green-400 p-3 rounded-xl text-green-400  font-bold">Read More</button>
                      </div>
                    </div>

                </div>  )
            }
        </div>
    );
};

export default blog;