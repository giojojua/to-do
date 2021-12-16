import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
            <section className="Container">
                <Main/>
            </section>
            <footer className="App-footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
