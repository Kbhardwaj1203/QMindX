import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/home2">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>  
            <li>
              <Link to="/home4" onClick={() => setMobileToggle(false)}>
                Home Version 4
              </Link>
            </li>
            <li>
              <Link to="/home5" onClick={() => setMobileToggle(false)}>
                Home Version 5
              </Link>
            </li>                                     
          </ul>
        </DropDown> */}
      </li>

      <li className="menu-item-has-children">
        <Link to="/aboutdark" onClick={() => setMobileToggle(false)}>
        About Us  
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
              About Light
              </Link>
            </li>
            <li>
              <Link to="/aboutdark" onClick={() => setMobileToggle(false)}>
              About Dark
              </Link>
            </li>                        
          </ul>
        </DropDown> */}

      </li>      
{/* 
      <li className="menu-item-has-children">
        <Link to="#">Team</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonial
              </Link>
            </li>  
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>         
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>                        
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>           
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>       */}
      <li className="menu-item-has-children">
        <Link to="/projectDark" onClick={() => setMobileToggle(false)}>
        Projects  
        </Link>
      </li>      
      <li className="menu-item-has-children">
        <Link to="/serviceDark" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>      
      <li className="menu-item-has-children">
        <Link to="/blogdark" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
