import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../_Actions/UserAction';
import { useNavigate } from 'react-router-dom';
import InputBox from './InputBox';
import UrlTable from './UrlTable';


const MasterLayOut = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const LogOut = () => {
        dispatch(LogOutAction())
        navigate('/');
        console.log('Log Out');
    }

    return (
<div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
     
      <li class="nav-item dropdown float-right">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" onClick={LogOut}>LogOut</a>
        </div>
                        </li>
                    </ul>
 
  </div>
        </nav>
        { children }
        <InputBox />
        <UrlTable />

        
        </div>
    )
}

export default MasterLayOut