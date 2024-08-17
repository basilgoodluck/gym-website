import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/logo.png";
import Link from "@/scenes/navbar/link";

type Props = {
  selectedPage: string,
  setSelectedPage: (value: string) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div
      className={`${flexBetween} w-full fixed top-0 z-30`}
    >
      <div className={`${flexBetween} `}>
        <div className="w-28">
          <img alt="logoimage" src={Logo} className="w-full h-full"/>
        </div>
        <div className={`${flexBetween} gap-11`}>
          <div className={`${flexBetween} gap-5`}>
            <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Blog"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Reviews"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div>
          <Link 
              page="Newletter"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar