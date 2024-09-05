type Props = {}

function Pricing({}: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 mt-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <p className="font-medium uppercase text-sm">Pricing plan</p>
              <h1 className="text-primary-500 font-bold text-2xl">JOIN TODAY</h1>
            </div>
            <div className="flex gap-2 bg-gray-200 rounded-2xl text-white text-sm">
              <button className="rounded-s-2xl px-3 py-1">Monthly</button>
              <button className="bg-black h-full w-full rounded-e-2xl py-1 px-3">Yearly</button>
            </div>
          </div>
          <div>
            <div className="bg-white drop-shadow-2xl px-3 py-7 rounded-2xl flex flex-col gap-4">
              <p>Beginner</p>
              <h1 className="text-5xl font-bold">05<span className="text-xs font-normal">/month</span></h1>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni</p>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <button className="w-full bg-black p-2 rounded-2xl text-white mt-[50px]">Choose plan</button>
            </div>

          </div>
            
        </div>
    </div>
  )
}

export default Pricing
