import { Link } from 'react-router-dom'
import { Usesigncontext } from '../hooks/usesigncontext';
import { Uselogout } from '../hooks/logout';

const Navbar = () => {
    const {user} = Usesigncontext()
    const {logout} = Uselogout()
    
    const handlelogout = () => { 
        localStorage.removeItem('user')
        logout()
    }

    return(
        <header >
            <div className='navbar'>
                <Link to = '/'>
                    <h1>Daily Routines</h1>
                </Link>
            </div>
            <nav>
                {user &&( 
                <div className='logout'>
                    <span>{user.username}</span>
                    <button onClick={handlelogout}>Log Out</button>
                </div>)}
                {!user && (
                    <div className='logout'>
                        <button><a href='/'>Sign In</a></button>
                        <button><a href='/signup'>Sign Up</a></button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;