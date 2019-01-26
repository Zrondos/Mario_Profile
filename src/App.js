import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import MyInfo from "./Components/MyInfo";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header";
import To_do_item from "./Components/To_do";
import ContactCard from "./Components/ContactCard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyInfo />
        <To_do_item />
        <h2>Contacts</h2>
        <ContactCard
          name="Yoshi"
          imgUrl="https://vignette.wikia.nocookie.net/sonic/images/4/4d/Yoshi_-_Mario_Party_10.png/revision/latest?cb=20161026130516"
          address="Yoshi's Island"
        />
        <ContactCard
          name="Luigi"
          imgUrl="https://vignette.wikia.nocookie.net/wii/images/d/d7/406px-Luigi_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20140121131452"
          address="Luigi's Mansion"
        />
        <ContactCard
          name="Princess Peach"
          imgUrl="https://www.mariowiki.com/images/thumb/b/b7/SuperMarioParty_Peach_2.png/175px-SuperMarioParty_Peach_2.png"
          address="Mushroom Castle"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
