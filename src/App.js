import React, { Component } from "react";
// import Counter from "./components/Counter";
// import NameForm from "./components/NameForm";
// import NameList from "./components/NameList";
import CounterContainer from "./containers/CounterContainer";
import NamesContainer from "./containers/NamesContainer";
import PostContainer from "./containers/PostContainer";

class App extends Component {
  // state = {
  //   names: ["webdev522", "Web Dev"]
  // };

  // onInsert = name => {
  //   this.setState(({ names }) => ({ names: names.concat(name) }));
  // };

  render() {
    // const { names } = this.state;
    // const { onInsert } = this;

    return (
      <div>
        <CounterContainer />
        <hr />
        <h1>Name List</h1>
        <NamesContainer />
        <hr />
        <PostContainer />
      </div>
    );
  }
}

export default App;
