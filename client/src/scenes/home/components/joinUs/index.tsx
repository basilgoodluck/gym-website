import { useState, useRef } from "react";
import BasicDetails from "../formDetails/basicDetails";
import MembershipDetails from "../formDetails/membershipDetails";
import Payment from "../formDetails/payment";

type Props = {}

const JoinUsModal = ({}: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(1)
    const openFile = useRef<HTMLInputElement>(null);
    const selectGender = useRef<HTMLInputElement>(null);
    const openUpload = () => {
        openFile.current?.click()
    }
    const openSelectGender = () => {
        selectGender.current?.click()
    }
    const goNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3))
    }
  return (
    <div>
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
        <form className="flex flex-col gap-4">
            {/* BASIC DETAILS */}
            {currentStep && currentStep === 1 &&
            (<BasicDetails 
                openSelectGender={openSelectGender}
                openUpload={openUpload}
                openFile={openFile}
            />)}

            {currentStep && currentStep === 2 && (
                <MembershipDetails />
            )}
            
            {currentStep && currentStep === 3 && (
                <Payment />
            )}
            <button type="button" onClick={() => goNextStep()} className="w-full bg-black text-white px-4 py-2 rounded">Next</button>
        </form>
    </div>
  )
}

export default JoinUsModal