const CardIt = ({name, price, photo, user, userImage}) => {
    return (
        <div class="flex items-center justify-center bg-gray-200">

            <card class="bg-white border border-gray-100 rounded-lg text-center hover:shadow-xl align-center">

                <img src={photo} class="rounded-t-lg" />


                <div class="flex justify-center">
                    <img src={userImage} class="rounded-full object-center border-4 border-white -mt-16 shadow-lg align-center" />
                </div>

                <p class="font-semibold p-2 text-sm text-gray-500"> by <span class="text-blue-700">{user}</span></p>

                <p class="font-bold pt-3 pb-2"> {name} </p>


                <p class="px-10 py-2 mb-5 text-gray-500"> A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is a collection of 10,000 unique, digital Pitbull NFT collectibles that represent community... </p>

            </card>

        </div>

    )
}

export default CardIt