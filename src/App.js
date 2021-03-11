import './App.css';
import playerData from './player-data.json'
import Header from './Component/Header/Header';
import PlayerCard from './Component/Header/PlayerCard/PlayerCard';
import { useEffect, useState } from 'react';
import Team from './Component/Team/Team';
function App() {
  const [players, setPlayer] = useState([]);

  const [team, setTeam] = useState([]);
  
  const addPlayer = (player) =>{
   
       
       const newTeam = [...team, player];
      setTeam(newTeam);
   
  }

  useEffect(() => {
    setPlayer(playerData);
  }, []);
  return (
    <div className="App">
      <Header></Header>
    
      <div className="body-area">
      <div className="player-card">
        {
          players.map((player)=> <PlayerCard player={player} addPlayer={addPlayer}></PlayerCard>)
        }
      </div>
      <div className="team-area"><Team team={team}></Team></div>
      </div>
    </div>
  );
}


export default App;
