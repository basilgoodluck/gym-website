import { useState } from "react";
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
          {/* <img alt="logoimage" src={Logo} className="w-28 h-full"/> */}
          <h4 className="text-xl font-bold"><span className="text-secondary-300 italic font-extrabold text-3xl">A</span>-lpha GYM</h4>
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
                page="Newsletter"
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
      {!isAboveMediaScreen  && (
        <div className={`h-[2000px] bg-white fixed ${isMobileNav ? "w-full left-0" : "w-[0] -left-[100px]"} flex items-center justify-center z-40 transition-all duration-300 ease-in`}>
          <div className="w-full mt-[400px]">
            <nav className={`w-full relative flex justify-center items-center`}>
              <button onClick={() => setIsMobileNav(!isMobileNav)} className="absolute top-[0px] right-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              </button>
              <div className={`flex justify-center items-center flex-col mt-[150px] bg-white h-full gap-8 text-xl`}>
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