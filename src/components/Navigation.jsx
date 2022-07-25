import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/users'>MyProfile</Link>
            

        </nav>
    );
}

export default Navigation;