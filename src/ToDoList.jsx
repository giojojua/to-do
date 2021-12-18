import ToDoStatus from "./ToDoStatus";

export default function ToDoList() {
    return (
        <ul>
            <li>
                <span><input className='checkbox' type="checkbox"/>Task 1</span>
                <ToDoStatus/>
            </li>
            <li>
                <span><input className='checkbox' type="checkbox"/>Task 2</span>
                <ToDoStatus/>
            </li>
            <li>
                <span><input className='checkbox' type="checkbox"/>Task 3</span>
                <ToDoStatus/>
            </li>
        </ul>
    )

}