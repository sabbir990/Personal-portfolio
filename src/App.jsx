import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import './index.css'
import TopSection from "./components/topsection";
import Projects from "./components/projects";
import Aboutme from "./components/aboutme";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  const [getCount, setGetCount] = useState();

  const getInfo = (value) => {
    setGetCount(value)
  }

  // useEffect(() => {
  //   console.log(getCount)
  // }, [getCount])

  return (
    <>
      <Navbar getInfo={getInfo} />

      {getCount === undefined || getCount === 0 || getCount === 1 ? (
        <div>


          <TopSection />
          <div className="underline-first">

          </div>
          <Skills />
          <div className="underline-first">

          </div>
          <Projects />

          <div className="underline-second">

          </div>
          <Aboutme />
          <Footer />
        </div>
      ) : getCount === 2 ? (
        <div>
          <Projects />
        </div>
      ) : getCount === 3 ? (
        <Aboutme />
      ) : ""}



    </>
  )
}

export default App
