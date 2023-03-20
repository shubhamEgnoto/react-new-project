const NewDropdown = ({ submenus, dropdown }) => {
    console.log("sssssssssssssssss dropdoen", submenus);

    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((menu, index) => (
          <li key={index} className="menu-items">
            {/* <a href={menu.path}> */}
                {menu.label}
            {/* </a> */}
          </li>
        ))}
      </ul> 
      
    );
  };
  
  export default NewDropdown;