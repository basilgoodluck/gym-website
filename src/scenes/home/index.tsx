import HomeBg from "@/assets/homeImage.png"
import Hero from "./components/hero"
import WhyChoose from "./components/whyChoose"
import OurTrainers from "./components/ourTrainers"
import Mentors from "./components/mentor"

type Props = {}

const Home = ({}: Props) => {
  return (
    <div className="min-h-full flex flex-col gap-10">
      <Hero />
      <WhyChoose />
      <OurTrainers />
      <Mentors />
    </div>
  )
}

export default Home