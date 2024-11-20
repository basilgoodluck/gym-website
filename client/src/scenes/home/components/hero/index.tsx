import HomeBg from "@/assets/homeImage.png"

type Props = {}

const Hero = ({}: Props) => {
  return (
    <div className="md:w-4/5 mx-auto">
        <div className="flex flex-col items-center text-white py-4 mt-16 gap-5 md:flex-row">
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
        </div>
    </div>
  )
}

export default Hero