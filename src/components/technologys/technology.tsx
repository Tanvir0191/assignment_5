import { useEffect, useState } from 'react'
function Technology() {
    const [technologies, setTechnologies] = useState<any[]>([])

    useEffect(() => {
        console.log('Technology component loaded')
    }, [])

    useEffect(() => {
        fetch('/public/data.json')
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data)
            })
    }, [])

    console.log(technologies)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologies.map((technology) => (
                    <div key={technology.id} className="border-2 border-gray-300  p-5 rounded-lg m-2 rounded-2xl shadow-md mb-4">
                        <img src={technology.icon} alt={technology.name} />
                        <h2 className='text-2xl font-bold'>{technology.name}</h2>
                        <p>{technology.description}</p>
                        <div className='flex  gap-5'>

                           
                            <p>rating: ⭐ {technology.rating}</p>
                            <p>difficulty: {technology.difficulty}</p>
                        </div>
                        <button className="w-full bg-gray-950 text-white text-sm py-2.5 rounded-lg mt-4 hover:bg-gray-800 transition">
                Add to Stack
              </button>
                    </div>


                ))}
            </div>



               <div>

          <div className="border border-gray-200 bg-white p-5 rounded-2xl shadow-sm">

            <h2 className="text-lg font-bold">
              Your Stack
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              No technologies selected yet.
            </p>


          
            <div className="border border-dashed border-gray-300 rounded-xl p-8 mt-5 text-center">

              <p className="text-sm text-gray-400">
                Your stack is empty.
              </p>

            </div>

          </div>
          </div>




        </div>
    )
}

export default Technology