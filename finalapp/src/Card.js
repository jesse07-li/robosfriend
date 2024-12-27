import React from 'react';


const Card = ({id, name, username, email}) => {
	return(
		<div className='tc dib ma2 bg-light-blue br3 pa3 b--dark-blue bw2 grow shadow-hover shadow-4'>
		<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
	);
}


export default Card;