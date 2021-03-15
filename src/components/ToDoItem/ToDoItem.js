import React from 'react'
import './ToDoItem.css'
import ButtonClose from "../ButtonClose/ButtonClose";

const ToDoItem = ({checked, handleChange, titleTodo, btnDelete}) => {
	return (
		<div className='blockInput'>
			<label className='textLabel' >{titleTodo}
				<input
					type="checkbox"
					defaultChecked={checked}
					className='inputList'
					onChange={handleChange}
				/>
				<span></span>
			</label>
			<ButtonClose
				btnClose={btnDelete}
			/>
		</div>
	)
};

export default ToDoItem;