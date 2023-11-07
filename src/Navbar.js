import { Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
        <Link to="/"> Home</Link>
        <Link to="/Profile"> Profile</Link>
        <Link to="/family"> Family</Link>
        <Link to="/funny"> Funny</Link>
        <Link to="/developers"> Developers</Link>
      </div>
    );
}