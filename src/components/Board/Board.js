import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Player from "../Player/Player";
import NavBar from "../NavBar/NavBar";
import './Board.css';

function Board() {
	const players = ['Magician the 1st', 'Magician the 2nd']
  return (
    <div className="board">
        <Header className="board-header"/>
        <div className="board-table">
	        <h2 className='players-board-title'> Players cristals number </h2>
	        <div className='players-board'>
		        {players.map(player => 
		        	<div className='player-container'>
						<h5 className='player-title'>{player}</h5>
		        		<Player title={player}/>
		        	</div>
		        )}
	        </div>
        </div>
    	<NavBar />
      </div>
  );
}

export default Board;
