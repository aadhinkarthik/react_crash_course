import TaskTracker from './components/EntryPoint/TaskTracker';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path='/' exact render={(props) => (
                        <>
                            <header className="header">
                                <h1>POC List</h1>
                            </header>
                            <Link to='/task-tracker'>Task Tracker</Link>
                        </>
                    )}/>
                    <Route path='/task-tracker' component={TaskTracker}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
