const AboutUs = () => {
    return (
        <div className="flex flex-col items-center bg-neutral-100 p-10 rounded-lg shadow-lg w-full">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-amber-900">About Us</h1>
                <p className="text-lg text-amber-700 max-w-2xl mx-auto mt-3">
                    Welcome to <span className="font-semibold">Crumbs & Co</span> – 
                    where we craft the finest homemade pastries and delicious treats 
                    with love and passion. 
                    Our mission is simple: <strong>bringing people together through the joy of baking.</strong>
                </p>
            </div>

            {/* Team & Mission Section */}
            <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl">
                <div className="flex flex-col items-center p-5 bg-amber-50 rounded-lg shadow-md w-full">
                    <h2 className="text-2xl font-semibold text-amber-900">Our Team</h2>
                    <p className="text-amber-800 text-center mt-2">
                        A passionate group of bakers, chefs, and food enthusiasts 
                        dedicated to crafting the best sweet treats! 
                    </p>
                </div>

                <div className="flex flex-col items-center p-5 bg-amber-50 rounded-lg shadow-md w-full">
                    <h2 className="text-2xl font-semibold text-amber-900">Our Mission</h2>
                    <p className="text-amber-800 text-center mt-2">
                        Bringing people together through the warmth and comfort 
                        of freshly baked goods.
                    </p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-10 w-full max-w-4xl">
                <h2 className="text-3xl font-semibold text-amber-900 text-center">What Our Customers Say</h2>
                <div className="mt-5 flex flex-col gap-6 md:flex-row justify-center">
                    <div className="bg-amber-100 p-5 rounded-lg shadow-md w-full max-w-sm">
                        <p className="text-amber-800 text-center">
                            "Best pastries in town! Can't get enough of their cookies!"
                        </p>
                        <span className="block text-center text-sm text-amber-900 font-bold mt-3">- Jane Doe</span>
                    </div>

                    <div className="bg-amber-100 p-5 rounded-lg shadow-md w-full max-w-sm">
                        <p className="text-amber-800 text-center">
                            "Absolutely love their croissants! Perfectly flaky and buttery."
                        </p>
                        <span className="block text-center text-sm text-amber-900 font-bold mt-3">- John Smith</span>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Button */}
            <button className="mt-8 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all shadow-md">
                Explore Our Treats 🍪
            </button>
        </div>
    );
};

export default AboutUs;