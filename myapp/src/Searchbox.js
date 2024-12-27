import React from 'react';
import 'tachyons';


const Searchbox = ({searchChange})=>{
	return(
		<div>
		< input 
		className='pa2 br3 bg-lightest-blue b--blue'
		type='search' 
		placeholder='search your robot'
		onChange = {searchChange}
		/>
		</div>

	);
}

export default Searchbox;