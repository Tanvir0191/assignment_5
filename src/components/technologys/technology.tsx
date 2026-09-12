import { useEffect, useState } from 'react'
function Technology() {
    const [technologies, setTechnologies] = useState<any[]>([])

  useEffect(() => {

    console.log('Technology component loaded')

  }, [])
  return (
    <div>
      Technology
    </div>
  )
}

export default Technology