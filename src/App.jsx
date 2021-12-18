import './App.css';
import ThemeButton from "./ThemeButton";
import Search from "./Search";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";

function App() {
    return (
        <div className="App">
            <div className="container">
                <ThemeButton/>
                <Search/>
                <ToDo/>
                <AddToDo/>
            </div>
        </div>
    );
}

export default App;
