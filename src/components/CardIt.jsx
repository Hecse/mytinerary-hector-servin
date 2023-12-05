import Acord from "../components/Acord.jsx"
import Like from "./svg/Like.jsx";

const CardIt = ({ name, price, photo, user, userImage, duration, hashtag }) => {

    const coinIcons = Array.from({ length: price }, (_, index) => (
        <svg key={index}
            className="w-6 h-6 fill-yellow-500 inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ));

    return (
        <article className="bg-white border rounded-lg text-center hover:shadow-xl align-center">
            <img
                src={photo}
                className="rounded-t-lg h-56 w-full object-cover"
            />

            <div className="flex justify-center">
                <img
                    src={userImage}
                    className="rounded-full object-center border-4 border-white -mt-16 shadow-xl w-24 h-24 object-cover"
                />
            </div>

            <p className="font-semibold p-2 text-sm text-gray-500">
                <span className="text-blue-700">
                    by {user}
                </span>
            </p>

            <p className="px-10 text-xl font-semibold pt-1 pb-2 h-20">
                {name}
            </p>

            <hr />

            {/* Renderiza los iconos de moneda */}
            <p className="px-10 text-gray-700 mt-6">
                Price {coinIcons}
            </p>

            <p className="px-10 text-gray-700">
                Duration {duration} hs
            </p>

            <p className="px-10 mb-6 text-gray-700">
                {hashtag}
            </p>

            <hr />

            <div className="mb-6 flex items-center justify-center gap-x-6">
                <div>
                    <div className="flex mt-6">
                        <button className="flex w-14 justify-center py-1 rounded-tl-full rounded-bl-full border-2 border-indigo-600 bg-white ">
                            <Like />
                        </button>

                        <div
                            className="flex w-14 items-center justify-center bg-indigo-600 p-2 rounded-tr-full rounded-br-full text-white font-semibold ">
                            0
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Acord />
            </div>
        </article>
    )
}

export default CardIt