import { useEffect, useState } from "react";
import Link from "@/scenes/navbar/link";
import JoinUsModal from "../home/components/joinUs";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { IoClose } from "react-icons/io5";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width: 1060px)");

  // Disable scrolling when modal or mobile nav is open
  useEffect(() => {
    if (isModalOpen || isMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen, isMobileNav]);

  return (
    <div className={`${flexBetween} w-full sticky top-0 z-30 shadow-lg`}>
      <div className={`${flexBetween} p-4 w-full bg-white`}>
        <div className="">
          <h4 className="text-xl font-bold">
            <span className="text-secondary-300 italic font-extrabold text-3xl">A</span>
            -lpha GYM
          </h4>
        </div>

        {isAboveMediaScreen ? (
          <div className={`${flexBetween} w-3/5`}>
            <div className={`${flexBetween} gap-8`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Blog" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Trainers" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Reviews" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div>
              <Link page="Newsletter" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <button onClick={() => setIsModalOpen(true)}>Join us</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsMobileNav(!isMobileNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-black "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </button>
        )}
      </div>

      {!isAboveMediaScreen && (
        <div
          className={`fixed h-full top-0 bg-transparent ${isMobileNav ? "w-full left-0" : "w-[0] -left-[100px]"} z-40 transition-all duration-200 ease-in`}
        >
          <div className="h-full pt-5 w-full bg-white">
            <nav className={`w-full relative flex justify-center items-center`}>
              <button onClick={() => setIsMobileNav(!isMobileNav)} className="absolute top-[0px] right-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
              <div className={`flex justify-center items-center flex-col mt-[150px] h-full gap-8 text-xl`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Blog" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Trainers" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Reviews" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <button onClick={() => setIsModalOpen(true)}>Join us</button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-[90%]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-black">Join Us</h2>
              <button className="block" onClick={() => setIsModalOpen(false)}><IoClose className="text-4xl text-black" /></button>
            </div>
            <JoinUsModal />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
