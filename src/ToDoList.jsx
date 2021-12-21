import Database from './Database.json';

export default function ToDoList() {

    let toDos = Database

    let toDoName = []

    Object.entries(toDos).map(([key]) => {
        toDoName.push(key)
        return toDoName
    })

    return toDoName.map((index) =>
        <li key={index}>
            <span><input className='checkbox' type="checkbox"/>{index}</span>
            <div className='todo-status'>
                <button className='bg-green'>!</button>
                <button>Delete</button>
            </div>
        </li>
    )
}