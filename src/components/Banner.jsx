import PropTypes from 'prop-types';
const Banner = ({ onClaimCredit }) => (
    
        <div className='lg:mx-[103px] mx-[20px] rounded-xl bg-black '   
        style={{
            backgroundImage: `url(${'./src/assets/image/bg-shadow.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
            >
            <div className="lg:max-w-[1070px] max-w-[500px] m-auto bg-banner-image bg-cover bg-center text-center py-10 text-white">
                <div className='flex justify-center items-center'>
                    <img className='mb-4' src="./src/assets/image/banner-main.png" alt="" />
                </div>

                <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="my-4 text-6">Beyond Boundaries, Beyond Limits</p>

                <button onClick={onClaimCredit} className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Claim Free Credit
                    </span>
                </button>
            </div>
        </div>
);

Banner.propTypes = {
    onClaimCredit: PropTypes.number.isRequired
};
export default Banner;
