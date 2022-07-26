import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
            

        </nav>
    );
}

export default Navigation;