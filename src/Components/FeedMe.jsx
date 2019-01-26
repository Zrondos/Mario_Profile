import React from "react";

class FeedMe extends React.Component {
  constructor() {
    super();
    this.state = { size: 0 };
    this.handleGrow = this.handleGrow.bind(this);
    this.handleShrink = this.handleShrink.bind(this);
  }

  handleGrow() {
    this.setState(previousState => {
      return { size: previousState.size + 1 };
    });
  }

  handleShrink() {
    this.setState(previousState => {
      return { size: previousState.size - 1 };
    });
  }
  render() {
    return (
      <div>
        <h1>My size is {this.state.size}</h1>
        <img
          onClick={this.handleGrow}
          src="https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/200px-MushroomMarioKart8.png"
        />
        <img
          onClick={this.handleShrink}
          src="https://vignette.wikia.nocookie.net/fanon-nintendo/images/8/84/Poison_Mushroom_-_Koopa_Kart_Wii.png/revision/latest?cb=20180330122444"
          style={{ height: 190, width: 190 }}
        />
      </div>
    );
  }
}

export default FeedMe;
