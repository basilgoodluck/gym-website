import { useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "@/scenes/navbar/link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width: 1060px)");
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false)
  return (
    <div
      className={`${flexBetween} w-full sticky top-0 z-30 shadow-lg`}
    >
      <div className={`${flexBetween}  p-4 w-full bg-white`}>
        <div className="">
          <img alt="logoimage" src={Logo} className="w-28 h-full"/>
        </div>
        { isAboveMediaScreen ? (
          
          <div className={`${flexBetween} w-3/5`}>
            <div className={`${flexBetween} gap-8`}>
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
                page="Trainers"
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

          </div>) : (
            <button
              onClick={() => setIsMobileNav(!isMobileNav)}
            >
              {/* <Bars3Icon className="text-black" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-black ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
            </button>
          )}
      </div>
      {!isAboveMediaScreen && isMobileNav && (
        <div className={`bg-white fixed flex items-center justify-center z-40`}>
          <div>
            <nav className="h-full w-full flex justify-center items-center mt-[300px]">
              <div className={`${flexBetween} flex-col bg-white w-[300px] h-full gap-8`}>
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
                  page="Trainers"
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
            </nav>
          </div>
        </div>
      )}            
    </div>
  )
}

export default Navbar