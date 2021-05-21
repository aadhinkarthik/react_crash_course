import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to='/'>Home Page</Link>
            <p>Developed by Aadhin Karthik</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}


export default Footer
