import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home')

  return (
    <>
      <div className="app">
        <Navbar 
          selectedPage = {selectedPage}
          setSelectedPage= {setSelectedPage}
        />
      </div>
    </>
  )
}

export default App
