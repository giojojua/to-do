import classNames from "classnames";
import {useEffect, useRef, useState} from "react";

const ITEMS = [
    {
        id: 1,
        title: 'lorem ipsum 11',
        completed: false,
        deleted: false,
    },
    {
        id: 2,
        title: 'lorem ipsum 22',
        completed: false,
        deleted: false,
    },
    {
        id: 3,
        title: 'lorem ipsum 33',
        completed: true,
        deleted: false,
    },
    {
        id: 4,
        title: 'lorem ipsum 44',
        completed: true,
        deleted: false,
    },
];

function TodoApp() {
    const [todos, setTodos] = useState(ITEMS);
    const [value, setValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        const items = localStorage.getItem('items');
        if (items) {
            setTodos(JSON.parse(items));
        }
    }, []);

    function onItemChange(clickedItem) {
        const newValue = todos.map(item => {
            if (item.id === clickedItem.id) {
                item.completed = !item.completed;
            }
            return item;
        })
        localStorage.setItem('items', JSON.stringify(newValue));
        setTodos(newValue);
    }

    function onAddNewItem(e) {
        e.preventDefault();
        const newItems = [
            {
                id: Date.now(),
                title: value,
                completed: false,
                deleted: false,
            },
            ...todos,
        ]
        setTodos(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        setValue('');
    }

    function onDeleteItem(clickedItem) {
        const itemDelete = todos.map(item => {
            if (item.id === clickedItem.id) {
                item.deleted = true
            }
            return item
        })
        setTodos(itemDelete)
        localStorage.setItem('items', JSON.stringify(itemDelete));
    }

    let counterAll = 0
    let counterDone = 0
    let counterToDo = 0

    todos.forEach(function (item, index) {
        if (item.deleted === false) {
            counterAll++
        }
        if (item.completed === true && item.deleted === false) {
            counterDone++
        }
        if (item.completed === false && item.deleted === false) {
            counterToDo++
        }
    })

    return <div className="container">
        <div className="todo-wrapper">
            <div>
                <form action="" onSubmit={onAddNewItem}>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        ref={inputRef}
                    />
                </form>
            </div>

            <ul>
                {
                    todos.map(item => {
                        if (item.deleted === false) {
                            return <li key={item.id} className={classNames({completed: item.completed})}>
                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => onItemChange(item)}
                                />
                                {item.title}
                                <button onClick={() => onDeleteItem(item)}>Delete</button>
                            </li>
                        }
                    })
                }
            </ul>
            <div>
                <div>All:{counterAll}</div>
                <div>Done:{counterDone}</div>
                <div>To-Do:{counterToDo}</div>
            </div>
        </div>
    </div>
}

export default TodoApp;