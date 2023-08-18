import { useParams } from "react-router-dom"



const City = () => {

    const {id} = useParams();

    return (
        <div className='flex  h-screen items-center justify-center '>
            <h2 className='text-3xl text-center'>City ID: {id}</h2>
        </div>
    )
}

export default City