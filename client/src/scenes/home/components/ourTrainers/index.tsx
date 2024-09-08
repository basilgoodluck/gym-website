import redMan from "@/assets/redMan.jpg";
import pinkLady from "@/assets/pinkLady.jpg"
import chestMan from "@/assets/chestMan.jpg"


type Props = {}

const OurTrainers = ({}: Props) => {
  return (
    <div>
        <div className="flex flex-col gap-4 px-6 mt-6">
            <h1 className="text-center text-primary-500 font-bold text-2xl">Our Trainers</h1>
            <p className="text-center text-gray-500 text-sm font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit labore mollitia, dolore cupiditate illo est eius eveniet</p>
            <div className="flex flex-col gap-6">
                <div className="h-[500px] relative drop-shadow-2xl">
                    <img src={redMan} alt="mansd" className="w-full h-full object-cover" />
                    <div className="absolute top-0 text-center bg-lightBlue h-full w-full flex justify-center items-center text-white flex-col gap-3 ">
                      <h4>David Nicholas</h4>
                      <p className="w-3/5 mx-auto text-sm">Hello guys! I am a David, it's a pleasure to connect with you all here.</p>
                    </div>
                    {/* <button className="absolute bottom-7 bg-white w-3/5 p-2">
                      See details
                    </button> */}
                </div>
                <div className="h-[500px] relative drop-shadow-2xl">
                    <img src={pinkLady} alt="mansd" className="w-full h-full object-cover" />
                    <div className="absolute top-0 text-center bg-lightBlue h-full w-full flex justify-center items-center text-white flex-col gap-3 ">
                      <h4>Alhaja Miami</h4>
                      <p className="w-3/5 mx-auto text-sm">Hello guys! I am a Miami, it's a pleasure to connect with you all here.</p>
                    </div>
                    {/* <button className="absolute bottom-7 bg-white w-3/5 p-2">
                      See details
                    </button> */}
                </div>
                <div className="h-[500px] relative drop-shadow-2xl">
                    <img src={chestMan} alt="mansd" className="w-full h-full object-cover" />
                    <div className="absolute top-0 text-center bg-lightBlue h-full w-full flex justify-center items-center text-white flex-col gap-3 ">
                      <h4>Alhaji Ibraheem</h4>
                      <p className="w-3/5 mx-auto text-sm">Hello guys! I am a David, it's a pleasure to connect with you all here.</p>
                    </div>
                    {/* <button className="absolute bottom-7 bg-white w-3/5 p-2">
                      See details
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTrainers