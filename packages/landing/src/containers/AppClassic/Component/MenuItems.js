import Dropdown from './Dropdown';
import FullMenu from './FullMenu';

const MenuItems = ({ submenus, dropdown, name }) => {
    console.log("sssssssssssssssss", name);
  return (
    <>
    {
        
        name === "Service" ? (
            <>
            {console.log("sssssssssssssssss1ffff", name)}
            <FullMenu />
            </>
        ) : (
          <>
          {console.log("sssssssssssssssss1ffff", name)}
            <Dropdown 
                submenus={submenus} 
                dropdown={dropdown}
                name={name}
			/>
      </>
        )
    }
    </>

            
        
    



    // <li className="menu-items">
    //   {items.submenu ? (    
    //     <>
    //       <button type="button" aria-haspopup="menu">
    //         {items.title}{' '}
    //       </button>
    //       <Dropdown submenus={items.submenu} />
    //     </>
    //   ) : (
    //     <a href={items.url}>{items.title}</a>
    //   )}
    // </li>
  );
};

export default MenuItems;   