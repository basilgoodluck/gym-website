import Hero from "./components/hero"
import WhyChoose from "./components/whyChoose"
import OurTrainers from "./components/ourTrainers"
import Coaches from "./components/coaches"

type Props = {}

const Home = ({}: Props) => {
  return (
    <div className="min-h-full flex flex-col gap-10">
      <Hero />
      <WhyChoose />
      <OurTrainers />
      <Coaches />
    </div>
  )
}

export default Home