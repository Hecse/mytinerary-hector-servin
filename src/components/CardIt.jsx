import { Link } from "react-router-dom"

const CardIt = ({ name, price, photo, user, userImage, duration, hashtag }) => {
    return (
        <article className="bg-white border rounded-lg text-center hover:shadow-xl align-center">

            <img
                src={photo}
                className="rounded-t-lg h-56 w-full object-cover" />

            <div className="flex justify-center">
                <img
                    src={userImage}
                    className="rounded-full object-center border-4 border-white -mt-16 shadow-xl w-24 h-24 object-cover" />
            </div>

            <p className="font-semibold p-2 text-sm text-gray-500"> by <span className="text-blue-700"> {user} </span></p>

            <p className="px-10 text-xl font-semibold pt-1 pb-2"> {name} </p>
            <p className="px-10 text-gray-700"> Price {price}</p>
            <p className="px-10 text-gray-700"> Duration {duration} hs</p>
            <p className="px-10  text-gray-700"> Hashtags {hashtag} </p>

            <div className="mb-6 flex items-center justify-center gap-x-6">
                <div>
                    <div className="flex mt-6">
                        <button className="flex w-14 justify-center py-1 rounded-tl-full rounded-bl-full border-2 border-indigo-600 bg-white ">
                            <svg viewBox="0 0 20 20" className="absolute w-6 fill-indigo-400 hover:fill-indigo-600">
                                <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                            </svg>
                        </button>

                        <div className="flex w-14 items-center justify-center bg-indigo-600 p-2 rounded-tr-full rounded-br-full text-white font-semibold ">0</div>
                    </div>
                </div>

                <div
                    className="mt-6 inline-block rounded-full border-2 border-indigo-600 w-28 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 transition-colors hover:text-white">
                    View more
                </div>

            </div>
        </article>
    )
}

export default CardIt