import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {auth} from '../firebase/firebase.utils';
import {useEffect} from 'react';

const navBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <span className="navbar-brand">MAGNATE'21</span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon text-black"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <NavLink className='nav-item' activeClassName='text-success' exact to='/'> Home </NavLink>
                        <NavLink className='nav-item' activeClassName='text-success' to='/dashboard'> DashBoard </NavLink>
                        <NavLink className='nav-item' activeClassName='text-success' to='/analyze'> Analyze </NavLink>
                        <NavLink className='nav-item' activeClassName='text-success' to='/funds'> Funds </NavLink>

                        { props.user === null ? 
                            <NavLink className='nav-item' activeClassName='text-success' to='/signin'> SignIn/SignUp </NavLink> 
                            :
                            <NavLink className='nav-item' activeClassName='text-success' to='/' onClick={() => auth.signOut()}> SignOut </NavLink>
                        }
                    
                    </ul>
                </div>

            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return{
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(navBar);