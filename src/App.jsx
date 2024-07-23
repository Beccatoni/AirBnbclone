import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Contact from "./components/Contact";
import one from "../src/assets/one.jpeg";
import two from "../src/assets/two.jpeg";
import three from "../src/assets/three.jpg";
import four from "../src/assets/four.webp";
import Jokes from "./components/Jokes";

function App() {
  let jokes = [
    {
      Setup: "I got my daughter a fridge for her birthday.",
      Punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      Setup: "How did the hacker escape the police?",
      Punchline: " He just ransomware!",
    },

    {
      Setup: "Why don't pirates travel on mountain roads?",
      Punchline: "Scurvy.",
    },

    {
      Punchline: "Swarm.",
    },
    {
      Setup: "What's the best thing about Switzerland?",
      Punchline: "I don't know, but the flag is a big plus!",
    },
  ];

  const jokeElements = jokes.map(joke => {
   return <Jokes setup={joke.Setup} punchline={joke.Punchline}/>
  })
  return (
    <>
      <div className="box-border m-0 font-Poppins">
        <Navbar />
        <Hero />
        <Main />

        {/* <div>
          <p className="text-2xl ">Here is  a list of jokes available</p>
          {jokeElements}
        </div> */}
      </div>
    </>
  );
}

export default App;
