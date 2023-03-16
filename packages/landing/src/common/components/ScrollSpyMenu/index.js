import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { DrawerContext } from "../../contexts/DrawerContext";
import NextImage from "../NextImage";
import MenuItems from "containers/AppClassic/Component/MenuItems";
import Dropdown from "containers/AppClassic/Component/Dropdown";

const RenderLinkWithIcon = ({ menu }) => {
	return (
		<div className="icon-login">
			{menu.icon ? (
				<NextImage className="icon" src={menu.icon} alt={menu.label} />
			) : (
				""
			)}
			<a
				className={menu.icon ? "icon-label" : "no-icon-label"}
				href={menu.path}
			>
				{menu.label}
			</a>
		</div>
	);
};

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
	const [dropdown, setDropdown] = useState(false);
	const [dropdownName, setDropdownName] = useState("");
	const { dispatch } = useContext(DrawerContext);
	// empty array for scrollspy items
	const scrollItems = [];

	// convert menu path to scrollspy items
	menuItems.forEach((item) => {
		scrollItems.push(item.path.slice(1));
	});

	// Add all classs to an array
	const addAllClasses = ["scrollspy__menu"];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	// Close drawer when click on menu item
	const toggleDrawer = () => {
		dispatch({
			type: "TOGGLE",
		});
	};

	console.log("ssssssssssssssssssssss", dropdownName);

	return (
		<Scrollspy
			items={scrollItems}
			className={addAllClasses.join(" ")}
			drawerClose={drawerClose}
			{...props}
		>
			{menuItems.map((menu, index) => (
				<li key={`menu-item-${index}`} className="menu-items">
					
					{menu.staticLink ? (
						<>
						{console.log("ssssssssssssssssss1111111111111")}
						<RenderLinkWithIcon menu={menu} />
						</>
					) : (
						<>
						{console.log("ssssssssssssssssss12222222")}
							{drawerClose ? (
								<>
								{console.log("sssssssssssssssss33333333333")}
								<AnchorLink
									href={menu.path}
									offset={menu.offset}
									onClick={toggleDrawer}
								>
									
									{menu.label}
								</AnchorLink>
								</>
							) : (
								<>
								
								{ menu.submenu ? (
									 <>
									 {console.log("sssssssssssssssss444444")}
									 <button 
									 	type="button" 
										aria-haspopup="menu"
										aria-expanded={dropdown ? "true" : "false"}
      									onClick={() => {
											setDropdown((prev) => !prev)
											setDropdownName(menu.label)
										}}
									>
									   {menu.label}{' '}
									 </button>	
									 <Dropdown 
									 	submenus={menu.submenu} 
										dropdown={dropdown}
										name={dropdownName}
									/>
								   </>
								) : (
									<>
									{console.log("sssssssssssssssss5555555")}
									<AnchorLink href={menu.path} offset={menu.offset}>
									{menu.label}

								</AnchorLink>




								</>
								)} 
								</>
							)}
						</>
					)}
				</li>
			))}
		</Scrollspy>
	);
};

ScrollSpyMenu.propTypes = {
	/** className of the ScrollSpyMenu. */
	className: PropTypes.string,

	/** menuItems is an array of object prop which contain your menu
	 * data.
	 */
	menuItems: PropTypes.array.isRequired,

	/** Class name that apply to the navigation element paired with the content element in viewport. */
	currentClassName: PropTypes.string,

	/** Class name that apply to the navigation elements that have been scrolled past [optional]. */
	scrolledPastClassName: PropTypes.string,

	/** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
	componentTag: PropTypes.string,

	/** Style attribute to be passed to the generated <ul/> element [optional]. */
	style: PropTypes.object,

	/** Offset value that adjusts to determine the elements are in the viewport [optional]. */
	offset: PropTypes.number,

	/** Name of the element of scrollable container that can be used with querySelector [optional]. */
	rootEl: PropTypes.string,

	/**
	 * Function to be executed when the active item has been updated [optional].
	 */
	onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
	componentTag: "ul",
	currentClassName: "is-current",
};

export default ScrollSpyMenu;
