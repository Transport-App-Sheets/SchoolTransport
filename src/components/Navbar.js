import logo from './logo.png'; 
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{padding:"3px" }}>
    <>
      <nav>
        <img alt="logo" src={logo} width="60  " height='45px'  style={{margin:"10px 30px"}} />
        <div> 
          <ul id='navbar'>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
            <li><Link to='/addchild'>Addchildren</Link></li>
            <li><Link to='/mapchild'>Services</Link></li>    
            <li><Link to='/showchild'>Childrens</Link></li>         
          </ul>
        </div>
      </nav>
    </></div>
  );
}

export default Navbar;

