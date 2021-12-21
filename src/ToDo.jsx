import ToDoList from "./ToDoList";

export default function ToDo() {
    return (
        <section className='w-100'>
            <div className='task-table'>
                <h1>TO-DO</h1>
                <div>
                    <ul>
                        <ToDoList/>
                    </ul>
                </div>
            </div>
        </section>
    )
}