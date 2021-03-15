import React from 'react'
import './ButtonClose.css'



const ButtonClose = ({btnClose})=> {
	return(
		<>
			<button className='closePostBtn' onClick={btnClose}>
				X
			</button>
		</>
	)
};

export default ButtonClose;