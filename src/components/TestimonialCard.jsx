export const TestimonialCard = (props) => {
    return (
        <div className="relative flex justify-center items-center ">
            <div className="absolute h-11/12 -left-6 top-3 max-w-sm bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center scale-90 opacity-70">
                <img 
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                    src="https://via.placeholder.com/150"
                    alt="User"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-500">Jane Doe</h3>
                <p className="mt-3 text-gray-500 italic">"Absolutely love it!"</p>
            </div>
            <div className="absolute h-11/12 -right-6 top-3 max-w-sm bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center scale-90 opacity-70">
                <img 
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                    src="https://via.placeholder.com/150"
                    alt="User"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-500">John Smith</h3>
                <p className="mt-3 text-gray-500 italic">"Incredible experience!"</p>
            </div>

            <div className="z-10 max-w-sm bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img 
                    className="transition-all duration-500 ease-in-out w-20 h-20 rounded-full object-cover border-4 border-orange-400"
                    src={props.photo}
                    alt="User"
                />
                <h3 className="mt-4 text-lg font-semibold text-amber-900 transition-all duration-500 ease-in-out">{props.name}</h3>
                <p className="mt-3 text-gray-700 italic transition-all duration-500 ease-in-out">"{props.testimony}"</p>
            </div>
        </div>
    );
};