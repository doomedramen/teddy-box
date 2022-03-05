
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid'

export default function TagCard({

}) {
    return (
        <div className="shadow-xl card bg-base-100">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        // <div classNameName="max-w-md px-4 py-4 my-4 bg-white rounded-lg shadow-lg">
        //     <div>
        //         <h2 className="text-3xl font-semibold text-gray-800">Lorem ipsum</h2>
        //         <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //     </div>
        //     <div className="flex justify-end mt-4 space-x-2">
        //         <button className="inline-flex items-center px-2 py-2 font-bold text-gray-400 rounded hover:bg-gray-100 hover:text-black ">
        //             <PencilAltIcon className="w-4 h-4" />
        //         </button>
        //         <button className="inline-flex items-center px-2 py-2 font-bold text-gray-400 rounded hover:bg-gray-100 hover:text-black ">
        //             <TrashIcon className="w-4 h-4" />
        //         </button>
        //     </div>
        // </div>
    )
}