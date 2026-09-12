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
        <div>
            {technologies.map((technology) => (
                <div key={technology.id}>
                    <img src={technology.icon} alt={technology.name} />
                    <h2>{technology.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default Technology