import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
    console.log("sssssssssssssssss");
  return (
    <li className="menu-items">
      {/* {items.submenu ? ( */}
        <>
          <button type="button" aria-haspopup="menu">
            {items.label}{' '}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
       {/* ) : (
        <a href={items.path}>{items.label}</a>
       )}  */}
    </li>
  );
};

export default MenuItems;   