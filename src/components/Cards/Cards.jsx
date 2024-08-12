import Card from "../Card/Card"
function Cards({cards}) {
    return (
        <div className='container w-full  border-spacing-1  '>
            
            <div className="px-12 flex space-x-4">
             <h1 className=' text-4xl text-left font-bold '>    Popular</h1>
             <h1 className=' text-4xl text-left font-bold'>   Courses</h1>

            </div>
            
            <div className="w-full p-4 py-10 ">
                <div className="cards grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                    {
                        cards.map( (card) => {
                            return <Card key={card.id} {...card} ></Card>
                        } )
                    }
                </div>
            </div>
        </div>
    );
}

export default Cards;