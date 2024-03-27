import { FaAngleDown } from "react-icons/fa6";

const head = () => {
    return (
        <div>
            <div className="bg-gray-200 p-8 text-center rounded-lg ">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div className="text-center mt-5">
                <details className="dropdown ">
                    <summary className="m-1 text-white text-xl btn bg-[#23BE0A]">Sort By <FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default head;