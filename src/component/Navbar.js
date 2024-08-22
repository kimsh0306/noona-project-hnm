import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Person, PermIdentity, Search } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const loginBtn = () => {
    if (authenticate) {
      navigate("/");
      setAuthenticate(false);
    } else {
      navigate("/login")
    };
  };

  const searchBtn = () => {
  }

  const logoBtn = () => {
    navigate("/");
  }

  return (
    <div className='nav-container'>
      <div>
        <div className="nav-top-area">
          <div className='nav-login-box' onClick={loginBtn}>
            <IconButton aria-label="login" size="small" >
              {authenticate ? <Person className='login-icon' /> : <PermIdentity className='login-icon' />}
            </IconButton>
            <div>{authenticate ? "로그아웃" : "로그인"}</div>
          </div>
          <div className='nav-search-box'>
            <IconButton aria-label="search" size="small" onClick={searchBtn}>
              <Search />
            </IconButton>
            <input type="text" placeholder='검색' />
          </div>
        </div>
      </div>
      <div className='nav-logo-area'>
        <img
          onClick={logoBtn}
          className='nav-logo'
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s" />
      </div>
      <div className='nav-menu-area'>
        <ul className='nav-menu-list'>
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Navbar
