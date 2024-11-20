import coachesImage from "@/assets/coaches.png"

type Props = {}

const Coaches = ({}: Props) => {
  return (
    <div>
        <div className="flex flex-col gap-4 px-6 mt-6">
            <div className="w-full">
                <img src={coachesImage} alt='coaches image' className="w-full hidden " />
            </div>
            <div className="flex flex-col gap-2 md:text-center md:w-4/5 mx-auto">
                <p className="font-medium uppercase text-sm">Are you looking for a Mentor?</p>
                <h1 className="text-primary-500 font-bold text-2xl">Coaches</h1>
                <p className="text-xs font-extralight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni, quidem atque blanditiis voluptas omnis inventore hic velit? Ullam quasi magnam amet qui?
                </p>
                <button className="bg-black p-2 rounded-2xl md:mx-auto text-white text-sm w-[200px]">Explore more</button>
            </div>
        </div>
    </div>
  )
}

export default Coaches