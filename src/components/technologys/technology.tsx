import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface TechnologyData {
    id: string
    name: string
    icon: string
    description: string
    rating: number
    difficulty: string
    category: string
}

function Technology() {
    const [technologies, setTechnologies] = useState<any[]>([])
    const [stack, setStack] = useState<TechnologyData[]>([])

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


   const addToStack = (technology: TechnologyData) => {
  const alreadyExists = stack.some(
    item => item.id === technology.id
  )

  if (alreadyExists) {
    toast.error(`${technology.name} is already in your stack!`)
    return
  }

  setStack([...stack, technology])

  toast.success(`${technology.name} added to your stack!`)
}

    const removeFromStack = (id: string) => {
        setStack(stack.filter(item => item.id !== id))
    }

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

                        <button
                            onClick={() => addToStack(technology)}
                            disabled={stack.some(item => item.id === technology.id)}
                            className="w-full bg-gray-950 text-white text-sm py-2.5 rounded-lg mt-4 hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {stack.some(item => item.id === technology.id)
                                ? '✓ Added to Stack'
                                : 'Add to Stack'}
                        </button>
                    </div>


                ))}
            </div>



            <div>

                <div className="border border-gray-200 bg-white p-5 rounded-2xl shadow-sm">

                    <h2 className="text-lg font-bold">
                        Your Stack
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                            {stack.length}
                        </span>
                    </h2>

                    {stack.length === 0 && (
                        <p className="text-sm text-gray-400 mt-2">
                            No technologies selected yet.
                        </p>
                    )}
                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center justify-between border border-gray-200 rounded-lg p-3 mt-3"
                        >
                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="w-8 h-8 object-contain"
                                />

                                <div>
                                    <h3 className="font-medium">
                                        {technology.name}
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        {technology.category}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => removeFromStack(technology.id)}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>

                        </div>
                    ))}



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