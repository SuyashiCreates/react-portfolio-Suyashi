import logo from "../assets/image_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaFile} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className =" mb-20 flex items-center justify-between py-6">
        <div className ="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
        href="https://www.linkedin.com/in/suyashi-sainath-1ba081230/"
        target="_blank" 
        style={{ textDecoration: 'none', color: 'inherit' }}  
        ><FaLinkedin /></a>

<a  
            href="https://github.com/SuyashiCreates" 
            target="_blank"  
         
            style={{ textDecoration: 'none', color: 'inherit' }} // Inherit color and remove underline  
          >  
            <FaGithub />
            </a>

            <a href="https://drive.google.com/file/d/1bqwWnDGV13DvHeRBvGjKHJTV8gdmaNAE/view?usp=drive_link"
            target="_blank"
            style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaFile />
            </a>
            
     
           
          
        </div>
      </nav>
    </div>
  );
    
  
};

export default Navbar;

