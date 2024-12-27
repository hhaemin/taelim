import React from "react";
import { SubMenuContainer, SubMenuItem, SubBelowMenu } from "./NavbarStyles";

const SubMenu = ({ isVisible, subMenus, onSubMenuClick, openSubMenu }) => {
  if (!isVisible) return null;

  return (
    <SubMenuContainer>
      {subMenus.map((menu) => (
        <React.Fragment key={menu.id}>
          <SubMenuItem onClick={() => onSubMenuClick(menu.id)}>
            {menu.image && <img src={menu.image} alt={menu.title} className="image" />}
            <span>{menu.title}</span>
          </SubMenuItem>
          <SubBelowMenu isVisible={openSubMenu === menu.id}>
            {menu.items?.map((item, index) => (
              <SubMenuItem key={index}>
                {item.image && <img src={item.image} alt={item.title} className="sub-image" />}
                <span>{item.title}</span>
                {item.subtitle && <span>{item.subtitle}</span>}
              </SubMenuItem>
            ))}
          </SubBelowMenu>
        </React.Fragment>
      ))}
    </SubMenuContainer>
  );
};

export default SubMenu;
