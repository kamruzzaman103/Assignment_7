import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => {
    toast("Player added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };
  return (
    <div>
      <h1>My Cricket Team</h1>
      <button onClick={notify}>Add Player</button>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;

