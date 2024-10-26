const Newsletter = () => {
    return (
        <div className="relative lg:mx-[98px] mx-[20px] m-auto border-2 border-white rounded-xl mb-[-130px] z-10 mt-10">
            <div className="m-3 bg-gray-100 text-center py-10 rounded-xl" style={{
                backgroundImage: `url(${'./src/assets/image/bg-shadow.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h2 className="text-2xl sm:text-4xl font-bold">Subscribe to our Newsletter</h2>
                <p className="mt-4">Get the latest updates and news right in your inbox!</p>
                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="mt-4 px-4 py-2 border rounded-lg"
                />
                <button className="ml-3 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
