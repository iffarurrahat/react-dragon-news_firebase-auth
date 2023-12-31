import { Link, NavLink } from "react-router-dom";
import Container from "../../../ui/Container";
import userDefaultPic from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div>
            <Container>
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        {/* <a className="text-xl md:text-3xl font-extrabold ml-auto lg:ml-0">CareerHub</a> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="w-10 mr-2 border-solid border-2 border-[#403F3F] rounded-full">
                            {
                                user ?
                                    <img className="rounded-full w-10 h-9" alt="Tailwind CSS Navbar component" src={user.photoURL} /> :
                                    <img className="rounded-full" alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                            }
                        </div>
                        {
                            user ?
                                <Link onClick={handleLogOut} className="py-2 px-8 cursor-pointer text-white bg-[#403F3F]">Logout</Link> :
                                <Link to='/login' className="py-2 px-8 cursor-pointer text-white bg-[#403F3F]">Login</Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;