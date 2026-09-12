
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div>
            <nav className="flex justify-between items-center gap-4 p-4 bg-white text-black container mx-auto ">
                <img src={logo} alt="Logo" />
                <ul className="flex gap-4 items-center">
                    <li><a href="#home" className=" text-pink-500 px-4 py-2 rounded">Home</a></li>
                    <li><a href="#Technology">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="flex gap-4 items-center">
                    <a href="#home">Login</a>
                 <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3  shadow-lg hover:from-blue-600 hover:to-pink-600 transition duration-300 rounded-full">Sign Up</button>
                 
                </div>
          



            </nav>
        </div>
    );
};

export default Nav;