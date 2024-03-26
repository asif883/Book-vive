import { Outlet } from "react-router-dom";
import Nav from "../Header/Nav";



const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Nav></Nav>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;