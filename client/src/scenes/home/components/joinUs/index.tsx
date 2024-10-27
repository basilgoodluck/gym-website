import { useState, useRef, FormEvent } from "react";
import BasicDetails from "../formDetails/basicDetails";
import MembershipDetails from "../formDetails/membershipDetails";
import Payment from "../formDetails/payment";


const API_URL = import.meta.env.VITE_GYM_WEBSITE_API_URL
export interface FormDataType {
  basicDetails: {
    name: string;
    phone: string;
    email: string;
    file: File | null;
    gender: string | null;
    age: string;
    weight: string;
    height: string;
  };
  memberShipDetails: {
    plan: string;
    duration: string;
    startDate: string;
    endDate: string;
    goals: string[];
    gender: string | number | undefined;
  };
}
const JoinUsModal = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    basicDetails: {
      name: "",
      phone: "",
      email: "",
      file: null,
      gender: null,
      age: "",
      weight: "",
      height: "",
    },
    memberShipDetails: {
      plan: "",
      duration: "",
      startDate: "",
      endDate: "",
      goals: [],
      gender: "",
    },
  });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      console.log("Validation failed.");
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData.basicDetails).forEach(([key, value]) => {
      formDataToSend.append(`basicDetails[${key}]`, value as any);
    });
    Object.entries(formData.memberShipDetails).forEach(([key, value]) => {
      formDataToSend.append(`memberShipDetails[${key}]`, value as any);
    });

    try {
      const response = await fetch(`${API_URL}/submit`, {
        method: 'POST',
        body: formDataToSend,
      });
      const data = await response.json();
      console.log("Response from server: ", data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const validateForm = () => {
    const { name, phone, email } = formData.basicDetails;
    if (!name || !phone || !email) {
      console.log("Some fields are missing");
      return false;
    }
    return true;
  };

  const openFile = useRef<HTMLInputElement>(null);
  const selectGender = useRef<HTMLInputElement>(null);

  const openUpload = () => {
    openFile.current?.click();
  };
  
  const openSelectGender = () => {
    selectGender.current?.click();
  };

  const goNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  return (
    <div>
      <div className="px-2 relative h- flex justify-center items-center">
        <div className="relative flex justify-between items-center w-full">
          <div className="progress absolute border border-gray-400 w-full top-[50%] -translate-y-1/2"></div>
          <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white">
            <p className={`w-2 h-2 rounded-full flex justify-center items-center p-2 text-xs ${currentStep >= 1 ? 'bg-black text-white border-black' : 'bg-gray-200 border-gray-200'}`}>1</p>
            <p className="text-[10px]">Basic Detail</p>
          </div>
          <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white">
            <p className={`w-2 h-2 rounded-full flex justify-center items-center p-2 text-xs ${currentStep >= 2 ? 'bg-black text-white border-black' : 'bg-gray-200 border-gray-200'}`}>2</p>
            <p className="text-[10px]">Membership Detail</p>
          </div>
          <div className="p-2 rounded-full flex justify-center items-center gap-2 flex-col z-10 bg-white">
            <p className={`w-2 h-2 rounded-full flex justify-center items-center p-2 text-xs ${currentStep === 3 ? 'bg-black text-white border-black' : 'bg-gray-200 border-gray-200'}`}>3</p>
            <p className="text-[10px]">Payment</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        {currentStep === 1 && (
          <BasicDetails
            openSelectGender={openSelectGender}
            openUpload={openUpload}
            openFile={openFile}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 2 && 
          (<MembershipDetails 
            formData={formData}
            setFormData={setFormData}
          />)}

        {currentStep === 3 && <Payment />}

        <button type="button" onClick={goNextStep} className={`w-full bg-black text-white px-4 py-2 rounded ${currentStep === 3 && "hidden"}`}>
          Next
        </button>

        {currentStep === 3 && (
          <button type="submit" className={`w-full bg-black text-white px-4 py-2 rounded ${currentStep && currentStep === 3 && "hidden"}`}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default JoinUsModal;
