// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails'; 
import UpdateRoom from './components/UpdateRoom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
       
          <Route path="/create-user" element={ <CreateUser /> } />
          <Route path="/edit-room" element={ <UpdateRoom/>} />
          <Route exact path="/" element = {<ShowRoomList/> } />
          <Route path="/show-room/:id" element={ <ShowRoomDetails />} />
           <Route path="/" element={ <Home /> } /> 

        </Routes>
      </div>

    </Router>
  );
}

export default App;
