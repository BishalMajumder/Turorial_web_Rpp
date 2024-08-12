

import Cards from "../Cards/Cards"
import StartLearning from "../StartLearning/StartLearning";
import Achievements from "../Achievements/Achievements"
import data from '../Data/Data'
import reviews from '../Tdata/Tdata';
import React, {useState} from "react";
const Body = () => {
    const [cards, setTours] = useState(data);
   
    return (
     <div className="max-w-md mx-auto   md:max-w-full justify-center items-center ">
            
            <div className="relative h-96 bg-cover bg-center w-full " style={{ backgroundImage: "url('/image/body1.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="relative z-10  flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-4xl mx-4">we ensure better education for a better world</h1>
                    <br></br>
                    
                    <button className=" text-xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >
                                get started
                    </button>
                    
                </div>
            </div>
           
            <div className="App w-full flex justify-center items-center ">
                <Cards cards={cards} ></Cards>
            </div>
            <div >
             <StartLearning/>
            </div>

    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-white">
     
      <div className="text-center">
        
        <h1 className="text-4xl font-bold">Our Achievements</h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        
        <Achievements reviews={reviews}/>

      </div>
    </div>
    
     </div>

    );
};

export default Body;
