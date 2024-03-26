

const Banner = () => {
    return (
        <div className=" mt-8 hero rounded-2xl h-[600px] bg-base-200">
            <div className="hero-content lg:gap-32 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/XFx3m8N/png-clipart-the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-you.png" className="max-w-sm rounded-lg bg-base-200 " />
                <div className="text-start">
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf </h1>
               
                <button className="btn bg-[#23BE0A] text-white mt-8">View The list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;