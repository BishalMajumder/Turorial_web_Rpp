import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card bg-gray-100 py-2 px-4 rounded">
            <div className="  text-green-600 font-extrabold">
            <h4 className=" text-2xl ">{name}</h4>
                  
                </div>

            <img src={image} className="image h-48 w-full rounded"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price text-2xl  text-green-600 font-bold">₹ {price}</h4>
                    
                </div>

                <div className="description">
                    {description}
                    <span className="read-more text-sky-600" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className=" text-xl bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
               Buy Now
            </button>
        </div>
        
    );
}

export default Card;
