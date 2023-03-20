import React, {  useState } from 'react';
import NewDropdown from './NewDropdown';

const FullMenu = ({submenus, dropdown}) => {
  const [subDropdown, setSubDropdown] = useState(false);
  // const [dropdownData,  setDropdownData] = ("");
  console.log("ssssssssssssssssssssssssss submenus", submenus);
  return (
    <>
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((menu, index) => (
          <li key={index} className="menu-items">
            <button 
												type="button" 
												aria-haspopup="menu"
												aria-expanded={dropdown ? "true" : "false"}
												onClick={() => {
													setSubDropdown((prev) => !prev)
													// setDropdownData(menu.submenu)
													
												}}
											>
                {menu.label}
            </button>
            <>
														{console.log("sssssssssssssssss444444first", menu.submenu )}
														{/* <NewDropdown
															submenus={menu.submenu} 
															dropdown={subDropdown}
															// name={dropdownName}
														/> */}
													
													
													</>
           </li> 
         ))}
      </ul> 
  
  </>
  );
}

export default FullMenu;