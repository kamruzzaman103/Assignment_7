import d from '/src/assets/image/logo-footer.png'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-40 relative pb-4">
            <div className="flex flex-col items-center md:items-start">
                <img src={d} alt="Cricket Logo" className="h-16 w-auto m-auto mb-4" />
            </div>
            <div className="lg:mx-[98px] mx-[20px] px-4 md:flex md:justify-between space-y-8 md:space-y-0 mb-4">
                <div className="text-center md:text-left">
                    <h3 className="text-[18px] font-semibold mb-2">About Us</h3>
                    <p className="text-gray-400 text-[14px] sm:w-[300px]">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-[18px] font-semibold mb-2">Quick Links</h3>
                    <ul className="text-gray-400 space-y-1 text-[14px]">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-[18px] font-semibold mb-2">Subscribe</h3>
                    <p className="text-gray-400 mb-4 sm:w-[250px] text-[14px]">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-lg border-none focus:ring-0 text-black"
                        />
                        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-r-lg font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="mt-5 text-center text-gray-500 text-sm">
                ©2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
