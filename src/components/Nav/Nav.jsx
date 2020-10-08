import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

function FriendSidebar(props) {
  return (
    <div>
      {props.idFr} - {props.realName}
    </div>
  );
}

function Nav(props) {
  let friendEL = props.friendDatabase.map((fr) => <FriendSidebar realName={fr.name} idFr={fr.id} />);

  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>

      {friendEL}
    </nav>
  );
}

export default Nav;

// function Friends(props) {
//   return <div>1 - {props.friendsData}</div>;
// }

// let friendsElement = props.friendsData.map((fr) => <Friends friendsData={fr.name} />);
//      <div> {friendsElement}</div>
