import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

export const Cities = () => {
  const [cities, setCities] = useState();
  let inputSearch = useRef();

  useEffect(() => {
    axios.get('http://localhost:7000/api/cities')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleSearch = async () => {
    const name = inputSearch.current.value;
    try {
      const response = await axios.get(`http://localhost:7000/api/cities?city=${name}`)
      setCities(response.data.cities)

    } catch (error) {
      if (error.response.status === 404) {
        console.log('no se encontro la ciudad')
        setCities([])
      } else {
        console.log(error)
      }
    }
  }

  return (
    <div className='container mx-auto px-8'>
      <div className="flex items-center justify-center p-4">
        <div className="rounded-lg bg-indigo-600 p-1 w-2/4">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-indigo-600 bg-white p-5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-600 transition">
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>

            <input ref={inputSearch} className="w-full bg-white pl-2 text-base font-semibold outline-0" type="text" placeholder="City name" />

            <button onClick={handleSearch} className="bg-indigo-600 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-indigo-500 transition-colors">Search</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          cities?.length > 0
            ? cities?.map((city) => {
              return (
                <Link key={city._id} to={`/cities/${city._id}`}>
                  <Card title={city.city} image={city.image} />
                </Link>
              )
            }) : <h2 />
        }
      </div>

      <div>
        {cities?.length === 0 && <div className="flex h-screen text-center items-center justify-center text-lg"><p>City not found<br />
          <Link to="/cities/#" className="text-lg text-center font-semibold leading-6 text-gray-900 transition hover:text-indigo-600" onClick={() => window.location.reload()}>PLEASE TRY AGAIN
          </Link></p>
        </div>}
      </div>
    </div>
  )
}
