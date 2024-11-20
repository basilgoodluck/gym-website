import Hero from "./components/hero"
import WhyChoose from "./components/whyChoose"
import OurTrainers from "./components/ourTrainers"
import Coaches from "./components/coaches"
import Pricing from "./components/pricing"
import Reviews from "./components/reviews"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Achieve from "./components/achieve"

type Props = {}

const Home = ({}: Props) => {
  return (
    <div className="min-h-full flex flex-col gap-10">
      <Hero />
      <Achieve />
      <WhyChoose />
      <OurTrainers />
      <Coaches />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home