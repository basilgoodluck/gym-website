import React from "react"
import { TbFileUpload } from "react-icons/tb";

type Props = {
    openSelectGender: (event: React.MouseEvent<HTMLButtonElement>) => void,
    openUpload: (event: React.MouseEvent<HTMLButtonElement>) => void,
    openFile: React.RefObject<HTMLInputElement>;
}

const BasicDetails = ({openSelectGender, openUpload, openFile }: Props) => {
  return (
    <div className="flex flex-col gap-4">
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
                <button type="button" className="bg-gray-200 py-2 rounded-md w-full text-[8px]" onClick={openSelectGender} >
                    <select className={`cursor-pointer appearance-none bg-transparent outline-none bg-gray-200 text-gray-300 border-0 text-xs px-3`}>
                        <option className="bg-gray-200 text-sm]"  disabled selected>Select Gender</option>
                        <option className="text-xs text-center">Male</option>
                        <option className="text-xs text-center">Female</option>
                    </select>
                </button>
                <input type="text" className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter age" />
                <input className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter weight" />
                <input className="bg-gray-200 w-full rounded-md text-sm text-center outline-none" placeholder="Enter height" />
            </div>
    </div>
  )
}

export default BasicDetails