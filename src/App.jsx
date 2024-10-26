import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';
import SelectedPlayer from './components/SelectedPlayer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(0);
  const [viewAvailable, setViewAvailable] = useState(true);

  useEffect(() => {
    document.title = 'Dream 11 Cricket Team'; 
    fetch('cricket_player_data.json') 
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const claimCredit = () => setCoins(coins + 500000); 

  const choosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error('You can only select 6 players!');
      return;
    }
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error('Player already selected!');
      return;
    }
    if (coins < parseInt(player.price.replace(/[$,]/g, ''))) {
      toast.error('Not enough coins!');
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - parseInt(player.price.replace(/[$,]/g, '')));
    toast.success(`${player.name} added to your team!`);
  };

  const removePlayer = (id) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerId === id);
    setSelectedPlayers(selectedPlayers.filter((player) => player.playerId !== id));
    setCoins(coins + parseInt(playerToRemove.price.replace(/[$,]/g, '')));
    toast.info(`${playerToRemove.name} removed from your team!`);
  };

  return (
    <div className="App">
      <Navbar coins={coins}></Navbar>
      <Banner onClaimCredit={claimCredit}></Banner>
      <div className='lg:mx-[98px] mx-[20px]'>
        <div className="max-w-[1070px] m-auto container mx-auto">
          <div className="flex justify-between my-4 items-center">
            <h1>Available Players ({selectedPlayers.length}/6)</h1>
            <div className="inline-flex border-2 border-solid rounded-lg">
              <button
                className="bg-white hover:bg-[#eaff31] focus:bg-[#eaff31] text-gray-800 font-bold py-2 px-4 rounded-l border-r-2 border-solid"
                onClick={() => setViewAvailable(true)}
              >
                Available
              </button>
              <button
                className="bg-white hover:bg-[#eaff31] focus:bg-[#eaff31] text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => setViewAvailable(false)}
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          </div>
          {viewAvailable ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {players.map((player) => (
                <PlayerCard key={player.playerId} player={player} onChoose={choosePlayer}></PlayerCard>
              ))}
            </div>
          ) : (
            <div>
              {selectedPlayers.map((player) => (
                <SelectedPlayer key={player.playerId} player={player} onRemove={removePlayer}></SelectedPlayer>
              ))}

              <button
                className=" border-2 border-black rounded-xl"
                onClick={() => setViewAvailable(true)}
                >
                  <p className='bg-[#eaff31] py-2 px-4 m-1 rounded-xl font-bold text-[16px]'>
                  Add More Player
                  </p>
              </button>
            </div>
          )}
        </div>
      </div>
      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
