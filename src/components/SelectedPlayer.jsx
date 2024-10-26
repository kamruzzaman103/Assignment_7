import PropTypes from 'prop-types';

const SelectedPlayer = ({ player, onRemove }) => (
  <div className="border py-2 px-4 flex justify-between items-center rounded-lg shadow-md bg-white mb-3">
    <div className='flex justify-center items-center gap-4'>
      <img src={player.picture} alt={player.name} className="h-16 w-16 rounded-xl" />
      <div>
        <h2 className="text-lg font-semibold">{player.name}</h2>
        <p className="text-sm">{player.role}</p>
      </div>
    </div>
    <div>
    Price: {player.price}
    </div>

    <div className="flex items-center gap-3">
      <button onClick={() => onRemove(player.playerId)} className="text-red-500">
        <img className='size-5' src="/src/assets/image/trash.png" alt="Remove Player" />
      </button>
    </div>
  </div>
);
SelectedPlayer.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SelectedPlayer;

