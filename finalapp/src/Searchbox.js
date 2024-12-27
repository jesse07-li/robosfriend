import React from 'react';


const Searchbox = ({searchChange}) =>{
	return(
		<div>
		<input className='br2 shadow-4 ma2 pa1 b--green bg-light-green'
		type='search' 
		placeholder='search your robot'
		onChange={searchChange}
		/>
		</div>
	);
}


export default Searchbox;