import HomeBg from "@/assets/homeImage.png"

type Props = {}

const Hero = ({}: Props) => {
  return (
    <div>
        <div className="flex flex-col items-center text-white py-4 mt-16 gap-5">
            <div className=" flex flex-col gap-2 px-6">
                <h1 className="text-4xl text-primary-500 ">Transform Your Health, One Step at a Time</h1>
                <p className="text-gray-500 text-sm font-thin">Our personalized fitness consultations are designed to help you</p>
                <p className="text-gray-500 text-xs font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit labore mollitia, dolore cupiditate illo est eius eveniet, magnam quibusdam nostrum voluptate fugit praesentium debitis accusamus! Aliquam eligendi quod totam.</p>
                <div className="flex gap-5 font-light">
                    <p className="bg-secondary-300 py-1 px-2 rounded-2xl">Get started</p>
                    <p className="underline text-red-200">Learn more</p>
                </div>
            </div>
            <div className="w-3/5">
              <img src={HomeBg} className="w-full" />
            </div>
            <div className="w-full">
              <div className="w-full bg-gray-900 py-5 px-6 flex justify-between">
                <div>
                  <h4 className="text-xs">500+</h4>
                  <p className="text-[7px] font-extralight">Happy members</p>
                  <p className="text-[7px] font-extralight">Our community is growing fast</p>
                </div>
                <div>
                  <h4 className="text-xs">5+</h4>
                  <p className="text-[7px] font-extralight">Years experience</p>
                  <p className="text-[7px] font-extralight">Experience in various workouts</p>
                </div>
                <div>
                  <h4 className="text-xs">13+</h4>
                  <p className="text-[7px] font-extralight">Certified trainers</p>
                  <p className="text-[7px] font-extralight">Guidance at every step</p>
                </div>
                <div>
                  <h4 className="text-xs">90%</h4>
                  <p className="text-[7px] font-extralight">Customer satisfaction</p>
                  <p className="text-[7px] font-extralight">We ensure your progress satisfaction</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero