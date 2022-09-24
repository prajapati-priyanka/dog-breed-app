import { useNavigate } from "react-router-dom";
import NavbarStyles from "./Navbar.module.css";
import { toast } from "react-toastify";

const Navbar = () => {
    
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
   

    const logoutHandler = ()=>{
    localStorage.clear();
    navigate("/register");
    toast.success("You are succesfully logged out")
    }

    return (  
        <nav className={NavbarStyles.navbar}>
        <h1 className={NavbarStyles.logoName} onClick={()=>navigate("/")}>Doggo</h1>
        {token ? (<ul className={NavbarStyles.navList}>
          <li onClick={logoutHandler} className={NavbarStyles.logoutBtn}>Logout</li>
          
        </ul>):(<ul className={NavbarStyles.navList}>
          <li onClick={() => navigate("/login")}>Login</li>
          <li onClick={() => navigate("/register")}>Register</li>
        </ul>)}
        
      </nav>
    );
}
 
export {Navbar};
