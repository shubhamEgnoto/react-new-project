const Dropdown = ({ submenus, dropdown, name }) => {
    console.log("sssssssssssssssss drop", name);

    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((menu, index) => (
          <li key={index} className="menu-items">
            <a href={menu.path}>{menu.label}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;