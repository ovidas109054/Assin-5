import logo from "./assets/logo.png"

const Nav = () => {
    return (
        <div>
            
            <nav className = "sticky top-0 z-50 w-full border-b border-gray-100">
               <div className = "flex justify-between container mx-auto items-center">
                <img src={logo} alt="Decstac" className='w-22 h-10 object-contain'/>

                <ul className='flex gap-4 items-center text-sm px-0.8'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Project</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className='flex gap-4 items-center text-sm px-0.8'>
                    <li>Sign In</li>
                    <li className=' w-20 h-6 flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-600 text-white px-0.8 rounded-full cursor-pointer hover:opacity-90 transition'>
                        Sign Up</li>
                </ul>
                 </div>
            </nav>
           
            
        </div>
    );
};

export default Nav;