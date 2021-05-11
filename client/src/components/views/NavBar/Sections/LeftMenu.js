import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Inicio</a>
    </Menu.Item>
    <Menu.Item key="Blog">
      <a href="/blog">Página de Posts</a>
    </Menu.Item>
    <Menu.Item key="Create">
      <a href="/blog/create">Criar Post</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu