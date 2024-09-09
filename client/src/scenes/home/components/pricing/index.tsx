import { useState } from 'react'
import Price from './price'

type Props = {}

const Pricing = ({}: Props) => {
  const [isMonth, setIsMonth] = useState(true)
  const [isYear, setIsYear] = useState(false)

  const buttonStyleMonth = {
    backgroundColor: isMonth ? "black" : "#ccc"
  }
  const buttonStyleYear = {
    backgroundColor: isYear ? "black" : "#ccc"
  }
  const changeDuration = () => {
    setIsMonth(() => !isMonth)
    setIsYear(() => !isYear)
  }
  console.log(isMonth, isYear)
  return (
    <div className="bg-[#eee] flex flex-col gap-4 px-6 mt-6 py-5 rounded-3xl">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <p className="font-medium uppercase text-xs">Pricing plan</p>
              <h1 className="text-primary-500 font-bold text-xl">JOIN TODAY</h1>
            </div>
            <div className="flex bg-gray-200 rounded-2xl text-white text-xs">
              <button className="rounded-s-2xl px-3 py-2" onClick={changeDuration} style={buttonStyleMonth}>Monthly</button>
              <button className="bg-black h-full w-full rounded-e-2xl py-2 px-3" onClick={changeDuration} style={buttonStyleYear}>Yearly</button>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {
              isMonth ? (
                <>
                  <Price
                  level={"Beginner"} 
                  amount={"30"} 
                  duration={"month"} 
                  standard={false}
                  advanced={false}
                  />
                  <Price
                  level={"Standard"} 
                  amount={"150"} 
                  duration={"month"} 
                  standard={true}
                  advanced={false}
                  />
                  <Price
                  level={"Advanced"} 
                  amount={"300"} 
                  duration={"month"} 
                  standard={true}
                  advanced={true}
                  />
                </>
              ) : (
                <>
                  <Price
                  level={"Beginner"} 
                  amount={"360"} 
                  duration={"year"} 
                  standard={false}
                  advanced={false}
                  />
                  <Price
                  level={"Standard"} 
                  amount={"1800"} 
                  duration={"year"} 
                  standard={true}
                  advanced={false}
                  />
                  <Price
                  level={"Advanced"} 
                  amount={"3600"} 
                  duration={"year"} 
                  standard={true}
                  advanced={true}
                  />
                </>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Pricing