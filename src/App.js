import React from "react";
import { Sidebar, SidebarHeader, SidebarLogo, SidebarBody, MenuBar, MenuItem, SubMenuBar, SidebarFooter } from "react-sidebar-pro"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NoteList from "./component/NoteList";
// import AppNavbar from "./component/Navbar";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Profile from "./component/Profile";
// import Slogin from "./component/Slogin";
// import Flogin from "./component/Flogin";


function App() {
  return (
    <>
    
    <Sidebar className="sidebar_custom">
    <SidebarHeader>
        <SidebarLogo />
    </SidebarHeader>
    <SidebarBody>
        <MenuBar>
            <MenuItem
                to='/'
                text='Dashboard'
            />
            <MenuItem
                to='/'
                text='My Project Tasks'
            />
            <SubMenuBar 
                label="More Options"
            >
                <MenuItem
                    to='/'
                    text='First Option'
                />
                <MenuItem
                    to='/'
                    text='Second Option'
                />
            </SubMenuBar>
        </MenuBar>
    </SidebarBody>
    <SidebarFooter>
        content of footer
    </SidebarFooter>
</Sidebar>
    
    </>

  );
}

export default App;
