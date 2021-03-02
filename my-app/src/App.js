import React, { Component } from "react";
import Welcome from "./Welcome";
// import HookCounter from "./components/HookCounter";
// import PostList from "./Request/PostList";


class App extends Component {

  render(){
  return (
    <div className='App'>
      <Welcome name="Kinza"/>
      <Welcome name="Rahim"/>
      <Welcome name="Shanza"/>

      {/* <h1>hello</h1> */}
      {/* <PostList/> */}
      {/* <HookCounter/> */}



    </div>
  );
}
}
export default App;
