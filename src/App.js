import "./App.css";
import Header from "./components/header.js";
import Intro from "./components/intro.js";
import Links from "./components/links.js";

function App() {
  return (
    <body>
      <Header> </Header>
      <div class="main-body">
        <Intro></Intro>
        <Links
          link1="https://www.linkedin.com/in/sanya-shetty-3449b5189/"
          link2="https://github.com/sanyashetty"
        ></Links>
      </div>
    </body>
  );
}

export default App;
