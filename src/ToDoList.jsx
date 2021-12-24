import {FaTrash} from 'react-icons/fa';
import Database from './Database';

export default function ToDoList() {

    let toDoName = []

    Object.entries(Database).map(([key, value]) => {
        toDoName.push(value.text)
        return toDoName
    })

    return toDoName.map((index, key) =>
        <li key={key}>
            <span><input className='checkbox' type="checkbox"/>{index}</span>
            <div className='todo-status'>
                <button className='bg-green'>!</button>
                <button><FaTrash/></button>
            </div>
        </li>
    )
}