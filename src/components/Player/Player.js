import React, { useState } from 'react';
import './Player.css';
import familyLogo from '../../data/img/families/dis.png';
import keyLogo from '../../data/img/forged-key.png';

function Player() {
	// const { title } = this.props;
  const [count, setCount] = useState(0)
  const increment = (count, value = 1) => setCount(count + value)

  const [key, setKey] = useState(0)
  const forgeKey = (count, key, value = 6) => {
  	if(count >= value){
	  	setKey(key + 1)
	  	setCount(count - value)
  	}
  }

  const renderKeys = (number) => {
  	let keys = [];
  	for(var i=0; i<number; i++){
  		keys.push(<img className='key image' src={keyLogo} alt='Smiley face' />)
  	}
  	return keys;
  } 
  return (
    <div className='player'>
			<div className='keys-counter counter' >
				<button className='decrement button' onClick={() => forgeKey(count, key)}>
					Forge Key 
				</button>
				<div className='keys-container'>
					<p> Keys: </p> 
					{renderKeys(key)}
			    </div>
			</div>
			<img className='family image' src={familyLogo} alt='Smiley face' />
			<div className='fragments-counter counter' >
				<button className='increment button' onClick={() => increment(count)}>
					+
				</button>
				<p>{`Key Fragments: ${count}`}</p>
				<button className='decrement button' onClick={() => increment(count, -1)}>
					-
				</button>
			</div>
		</div>
  );
}

export default Player;
