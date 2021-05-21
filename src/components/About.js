import { useHistory } from 'react-router-dom';
import Button from './TaskTracker/Button';

const About = () => {

    const history = useHistory();

    return (
        <div>
            <h2>React Crash Course</h2>
            <br/>
            <h4>Learning from Guruji - Brad Traversy</h4>
            <br/>
            <Button text='Previous' onClick={() => { history.goBack() }}></Button>
        </div>
    )
}

export default About
