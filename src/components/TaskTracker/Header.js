import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ showTask, showAdd }) => {

    // To look at Route URL
    const location = useLocation();

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {
                location.pathname === '/task-tracker' &&
                <Button
                    color={ showAdd ? 'orange' : 'green' }
                    text={ showAdd ? 'Close' : 'Add' }
                    onClick={showTask}
                />
            }
        </header>
    )
}

export default Header
