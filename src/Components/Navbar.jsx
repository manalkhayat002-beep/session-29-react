import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className ="navbar shadow-2xl py-5">
        <div className="container flex justify-between items-center">
            <NavLink to={"/"}className="text-4xl font-bold ">Manal khayat</NavLink>
        <ul className="flex gap-3">
            <li>
                <NavLink to={"/"}className="text-xl font-bold hover:text-sky-500 duration-300" >Home</NavLink>
            </li>
            <li>
                <NavLink to={"/Food"} className="text-xl font-bold hover:text-sky-500 duration-300">Food</NavLink>
            </li>
            <li>
                <NavLink to={"/Drinks"} className="text-xl font-bold hover:text-sky-500 duration-300">Drinks</NavLink>
            </li>

        </ul> 
        </div>
       
    </div>
  )
}

export default Navbar