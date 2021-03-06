import React from "react";

// core components
import SubNavbar from "components/SubNavbar.js";
import MyNavbar from "components/MyNavbar.js";
import Summary from "components/sgpg/Summary.js";
import UI_summary from "components/sgpg/UI_summary.js";
import Skill from "components/sgpg/Skill.js";
import Database from "components/sgpg/Database.js";
import UI_home from "components/sgpg/UI_home.js";
import UI_user from "components/sgpg/UI_user.js";
import UI_itemadd from "components/sgpg/UI_itemadd.js";
import UI_itemdetail from "components/sgpg/UI_itemdetail.js";
import Demo from "components/sgpg/Demo.js";
import ScrollTopBtn from "components/ScrollTop.js";

class Sgpg extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "smooth";
  }
  render() {
    return (
      <>
        <SubNavbar />
        <MyNavbar />
        <main ref="main">
          <Summary />
          <UI_summary />
          <Skill />
          <Database />
          <UI_home />
          <UI_user />
          <UI_itemadd />
          <UI_itemdetail />
        </main>
        <Demo />
        <ScrollTopBtn />
      </>
    );
  }
}

export default Sgpg;
