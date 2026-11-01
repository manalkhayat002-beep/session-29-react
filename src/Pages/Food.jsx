import FoodSidebar from "../Components/FoodSidebar"

function Food() {
  return (
    <div className="min-h-screen h-screen flex ">
    
     <FoodSidebar />
        
         
        <div className="content h-full grow w-3/4 bg-cyan-900"></div>
       
    </div>
  )
}

export default Food