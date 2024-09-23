import { useEffect, useState, useRef } from "react";
import Link from "@/scenes/navbar/link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { TbFileUpload } from "react-icons/tb";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const openFile = useRef<HTMLInputElement>(null)
  const selectGender = useRef<HTMLInputElement>(null)
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

  const openUpload = () => {
    openFile.current?.click()
  }
  const openSelectGender = () => {
    selectGender.current?.click()
  }

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
            <h2 className="text-xl font-bold mb-4 text-black">Join Us</h2>
            <div>
              <div className="px-2 relative h- flex justify-center items-center">
                <div className="relative flex justify-between items-center w-full">
                  <div className="progress absolute border border-gray-400 w-full top-[50%] -translate-y-1/2"></div>
                  <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white ">
                    <p className="bg-black w-2 h-2 rounded-full flex justify-center items-center p-2 border-4 border-black text-white text-xs ">1</p>
                    <p className="text-[10px]">Basic Detail</p>
                  </div>
                  <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white">
                    <p className="bg-gray-200 w-2 h-2 rounded-full flex justify-center items-center p-2 border-4 border-gray-200 text-white text-xs ">2</p>
                    <p className="text-[10px]">Membership Detail</p>
                  </div>
                  <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white">
                    <p className="bg-gray-200 w-2 h-2 rounded-full flex justify-center items-center p-2 border-4 border-gray-200 text-white text-xs">3</p>
                    <p className="text-[10px]">Payment</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-4">
                <h1>Basic Details</h1>
                <div className="flex gap-3 w-full">
                  <div className="w-1/2 flex flex-col justify-between">
                    <input type="text" placeholder="Enter name" className="outline-none bg-gray-200 rounded-md py-2 px-2 text-xs w-full "/>
                    <input type="text" placeholder="Enter phone no" className="outline-none bg-gray-200 rounded-md py-2 px-2 text-xs w-full"/>
                    <input type="text" placeholder="Enter email" className="outline-none bg-gray-200 rounded-md py-2 px-2 text-xs w-full"/>
                  </div>
                  <button type="button" onClick={openUpload} className="border-4 border-dotted border-gray-400 h-full w-1/2 rounded-md py-6 flex flex-col justify-center items-center gap-2 ">
                    <input type="file" ref={openFile} id="your_file" className="hidden outline-none" />
                    <TbFileUpload className="text-2xl" />
                    <h4 className="text-sm ">Drop your files here</h4>
                    <em className="text-[8px] text-gray-50">Maximum upload file size is 2mb</em>
                  </button>
                </div>
                <div className="flex gap-3">
                  <button type="button" className="bg-gray-200 py-1  rounded-md w-full" onClick={openSelectGender} >
                    {/* <p ref={selectGender}>--select--</p> */}
                    <select className={`cursor-pointer appearance-none bg-transparent outline-none bg-gray-200 border-0 text-sm`}>
                      <option className="bg-gray-200 text-sm]"  disabled selected>Select Gender</option>
                      <option className="text-sm text-center">Male</option>
                      <option className="text-sm text-center">Female</option>
                    </select>
                  </button>
                  <input type="text" className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter age" />
                  <input className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter weight" />
                  <input className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter height" />
                </div>
                <button onClick={() => setIsModalOpen(false)} className="mt- bg-black text-white px-4 py-2 rounded">Next</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
