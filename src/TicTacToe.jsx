import { useEffect, useState } from "react";
import "./tictac.css";

function Squre({ value, onClick }) {
  return (
    <button onClick={onClick} className="squre">
      {value}
    </button>
  );
}
// 012
// 345
// 678

export default function TicTacToe() {
  const [squre, setSqure] = useState(Array(9).fill(""));
  const [isXturn, setisXturn] = useState(true);
  const [status,setStatus]=useState('')
  function getWinner(squre) {
    const winningPatten = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatten.length; i++) {
      const [x, y, z] = winningPatten[i]
      console.log(i);
      if (squre[x] && squre[x] === squre[y] && squre[x] === squre[z]) {
        return squre[x];
        
      }
    }
    return null;
  }

  function handleClick(getCsqure) {
    let cpysqure = [...squre];
    if (getWinner[cpysqure] || cpysqure[getCsqure]) return;
    cpysqure[getCsqure] = isXturn ? "X" : "O";
    setisXturn(!isXturn);
    setSqure(cpysqure);
  }
  function handleRestart(){
    setisXturn(true)
    setSqure(Array(9).fill(""))
  }

  useEffect(()=>{
     if(!getWinner(squre)&& squre.every(item=>item!=='')){
        setStatus(<div className="color-red">This a Draw Resrat a Game</div>)
     }
     else if (getWinner(squre)){
        setStatus(<div className="color">Winner is {getWinner(squre)}</div>)
     }
     else{
        setStatus( <div>Next Player is {isXturn ? 'X':'O'}</div>) 
     }
  },[squre,isXturn])

  return (
    <div className="tic-tac-container">
      <div className="row">
        <Squre value={squre[0]} onClick={() => handleClick(0)} />
        <Squre value={squre[1]} onClick={() => handleClick(1)} />
        <Squre value={squre[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Squre value={squre[3]} onClick={() => handleClick(3)} />
        <Squre value={squre[4]} onClick={() => handleClick(4)} />
        <Squre value={squre[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Squre value={squre[6]} onClick={() => handleClick(6)} />
        <Squre value={squre[7]} onClick={() => handleClick(7)} />
        <Squre value={squre[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button className="restart" onClick={handleRestart}>Restart</button>
    </div>
  );
}
