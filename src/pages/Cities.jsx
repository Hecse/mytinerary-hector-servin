import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'



export const Cities = () => {
  const [cities, setCities] = useState();

  useEffect(() => {
    axios.get('http://localhost:7000/api/cities?city=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleImputChage = async (city) => {
    console.log(city.target.value)

    try {
      const response = await axios.get(`http://localhost:7000/api/cities?city=${city.target.value}`)
      setCities(response.data.cities)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=''>
      <div className="flex w-screen items-center justify-center p-5">
        <div className="rounded-lg bg-indigo-600 p-1 w-2/4">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-indigo-600 bg-white p-5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-600 transition">
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>

            <input onChange={handleImputChage} className="w-full bg-white pl-2 text-base font-semibold outline-0" type="text" placeholder="City name" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-8">
        {
          cities?.map((city) => {
            return (
              <Link key={city._id} to={`/cities/${city._id}`}>
                <Card title={city.city} description={city.description} image={city.image} />
              </Link>
            )
          })}
      </div>
    </div>
  )
}
