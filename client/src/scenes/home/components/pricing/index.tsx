import { useState } from 'react'
import Price from './price'

type Props = {}

const Pricing = ({}: Props) => {
  const [isMonth, setIsMonth] = useState(true)
  const changeDuration = () => {
    setIsMonth(() => !isMonth)
  }
  console.log(isMonth)
  return (
    <div className="flex flex-col gap-4 px-6 mt-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <p className="font-medium uppercase text-xs">Pricing plan</p>
              <h1 className="text-primary-500 font-bold text-xl">JOIN TODAY</h1>
            </div>
            <div className="flex gap-2 bg-gray-200 rounded-2xl text-white text-xs">
              <button className="rounded-s-2xl px-3 py-1" onClick={changeDuration}>Monthly</button>
              <button className="bg-black h-full w-full rounded-e-2xl py-1 px-3">Yearly</button>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Price />
          </div>
        </div>
    </div>
  )
}

export default Pricing