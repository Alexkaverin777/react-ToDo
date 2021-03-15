import React, {useState, useEffect} from 'react';
import ToDoItem from "./components/ToDoItem/ToDoItem";

const App = () => {
	const [valueInput, setValueInput] = useState('');
	const [data, setData] = useState([
		{
			text: "Изучить Redux",
			completed: false,
			id: 1
		},
		{
			text: "Сделать ToDoList",
			completed: false,
			id: 2
		}
	]);
	const addPost = (e) => {
		e.preventDefault();
		if (!valueInput){
			alert('Поле должно быть заполнено');
			return
		}
		const randomNumber = Math.floor(Math.random() * 1000000);
		const newPost = {
			text: valueInput,
			completed: false,
			id: randomNumber
		};
		setData([newPost, ...data]);
		setValueInput('');
	};
	const deletePost = id => {
		const deletePost = data.filter(elem => elem.id !== id);
		setData(deletePost)
	};

	const handleChange = (id) => {
		const changeCompleted = data.map(item => {
			if (item.id === id){
				return {...item, completed: !item.completed}
			}else {
				return item
			}
		});
		setData(changeCompleted)
	};
	const completedFalse = data.filter(elem =>elem.completed === false);
	const completedTrue = data.filter(elem => elem.completed === true);
	const resultCompleted = [...completedFalse, ...completedTrue];

	const todoItem = resultCompleted.map(item => {
		return (
			<ToDoItem
				key={item.id}
				checked={item.completed}
				titleTodo={item.text}
				handleChange={() => handleChange(item.id)}
				btnDelete={() => deletePost(item.id)}
			/>
		)
	});

	return (
		<>
			<header className='header'>
				<div className="toDoList">
					{todoItem}
					<form>
						<p className="form-text">Новая задача &#11015;</p>
						<input className="newPost" value={valueInput} onChange={e => setValueInput(e.target.value)} type="text" placeholder='Max liters 30'
							   maxLength="30"/>
						<button type='submit' className="form-btn" onClick={addPost}>Добавить пост</button>
					</form>
				</div>
			</header>
		</>
	)
};
export default App;
