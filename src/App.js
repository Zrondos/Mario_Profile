import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import MyInfo from "./Components/MyInfo";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header";
import To_do_item from "./Components/To_do";
import ContactCard from "./Components/ContactCard";
import Joke from "./Components/Joke";
import jokesData from "./jokesData";
import FeedMe from "./Components/FeedMe";

class App extends Component {
  render() {
    // const jokeComponents = jokesData.map(joke => (
    //   <Joke question={joke.question} punchLine={joke.punchLine} />
    // ));
    const jokeComponents = jokesData.map(joke => {
      return <Joke question={joke.question} punchline={joke.punchline} />;
    });
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
        <div>
          <h2>Jokes</h2>
          {jokeComponents}
          {/* <Joke
            question="Why did Princess Peach cross the road? "
            punchline="She was playing Mario Kart and not wearing her seatbelt."
          />
          <Joke punchline="Mario is red. Sonic is blue. Press start to join and be my player 2. " />
          <Joke
            question="What is Mario's favorite musical? "
            punchline="Mama Mia"
          /> */}
        </div>
        <div />
        <FeedMe />
        <Footer />
      </div>
    );
  }
}

export default App;
