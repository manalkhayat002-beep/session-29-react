import { NavLink } from "react-router-dom"
const  FoodSidebar =() => {
  return (
   <aside className="h-screen bg-gray-700 p-4 min-w-50"> 
    <ul className="flex flex-col gap-5">
        <li>
            <NavLink className="bg-white block w-full p-2 rounded-lg text-xl font-bold">Burger</NavLink>
        </li>
    
    <li>
            <NavLink className="bg-white block w-full p-2 rounded-lg text-xl font-bold">Pizza</NavLink>
        </li>
        <li>
            <NavLink className="bg-white block w-full p-2 rounded-lg text-xl font-bold">Salad</NavLink>
        </li>
      </ul>
   </aside>
   
  )
}

export default FoodSidebar