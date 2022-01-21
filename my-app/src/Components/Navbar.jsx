import  React from 'react'
import {Link} from 'react-router-dom'
import Card from './Welcome';

const NavBar =({user})=>{
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };
    return(
        <div className="navbar">
        <span className="logo">
           CodeSoftic
        </span>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img
                src={user.ProfilePic}
                alt=""
                className="avatar" 
              />
            </li>
            <li className="listItem">{user.Name}</li>
            <li className="listItem" onClick={logout}>
              Logout
            </li>
          </ul>
        ) : (
          <Link className="link" to="login">
            LOGIN
          </Link>
        )}
      </div>
    )
}

export default NavBar