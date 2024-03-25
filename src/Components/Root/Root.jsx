import { Outlet } from "react-router-dom";
import Nav from "../Header/Nav";
import Banner from "../Header/Banner";


const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Nav></Nav>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;