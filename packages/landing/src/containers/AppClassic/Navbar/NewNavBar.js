import { navBar } from '../../../common/data/AppClassic';
// import Logo from '../../../common/components/UIElements/Logo'
const Navbar = () => {
    const { navMenu } = navBar;
    return (
        <nav>
          <ul className="menus">
            {navMenu.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <a href={menu.path}>{menu.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    };
    
export default Navbar;