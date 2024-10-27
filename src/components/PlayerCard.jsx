import PropTypes from 'prop-types';
import e from "/src/assets/image/user.svg"
import f from '/src/assets/image/europe-flag.svg'
const PlayerCard = ({ player, onChoose }) => (
    <div className="border p-4 rounded-xl shadow-md bg-white">
        <img src={player.picture} alt={player.name} className="sm:h-60 h-80 w-full  max-w-full rounded-xl" />
        <div className='flex items-center my-4'>
            <img className='size-6 mr-2 ' src={e} alt="" />
            <h2 className="text-lg font-semibold mt-2">{player.name}</h2>
        </div>
        <div className='flex justify-between mb-4'>
            <div className='flex'>
                <img className='size-6 mr-2' src={f} alt="" />
                <p>{player.countryName}</p>
            </div>
            <p className="text-sm text-black bg-gray-200 p-1 rounded-lg">{player.role}</p>
        </div>

        <div className="border-b-2 border-gray-300"></div>

        <div className='flex justify-between items-center'>
        <h1 className='font-bold text-lg my-3'>Rating</h1>
        <h1>{player.rating}/10</h1>
        </div>

        <div className='flex justify-between items-center text-[16px] font-semibold mb-2'>
            <p>{player.battingStyle}</p>
            <p className=" text-gray-600">{player.bowlingStyle}</p>
        </div>
        <div className='flex justify-between items-center  font-semibold'>
            <p className=" text-[16px]">Price: {player.price}</p>
            <button className="border-2 border-solid p-2 rounded-lg text-[14px]" onClick={() => onChoose(player)}>
                Choose Player
            </button>
        </div>

    </div>
);
PlayerCard.propTypes = {
    player: PropTypes.shape({
        playerId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        battingStyle: PropTypes.string,
        bowlingStyle: PropTypes.string,
        price: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        rating:PropTypes.string.isRequired
    }).isRequired,
    onChoose: PropTypes.func.isRequired
};

export default PlayerCard;
