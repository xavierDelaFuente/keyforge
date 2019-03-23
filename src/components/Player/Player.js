import React, { useState } from 'react';
import './Player.css';

function Player() {
	// const { title } = this.props;
  const [count, setCount] = useState(0)
  const increment = (count, value = 1) => setCount(count + value)

  return (
    <div className='player'>
			<div className='fragments-counter counter' >
				<button className='increment' onClick={() => increment(count)}>
					+
				</button>
				<p>{`Key Fragments: ${count}`}</p>
				<button className='decrement' onClick={() => increment(count, -1)}>
					-
				</button>
			</div>
			<div className='keys-counter counter' >
				<p>{`Keys: `}</p>
			</div>
		</div>
  );
}

export default Player;
