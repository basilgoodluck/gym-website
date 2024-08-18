import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const splitBackground = "linear-gradient(to right, #fff 0%, #fff 60%, #2c3359 60%, #2c3359 100%)" 

  return (
    <>
      <div 
        className={`${splitBackground} app`}
      >
        <Navbar 
          selectedPage = {selectedPage}
          setSelectedPage= {setSelectedPage}
        />
      </div>
    </>
  )
}

export default App
