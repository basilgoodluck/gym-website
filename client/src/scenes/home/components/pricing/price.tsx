type Props = {
  level: String,
  amount: String,
  duration: String,
  standard: Boolean,
  advanced: Boolean
}

function Price({ level, amount, duration, standard, advanced }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <div>
            <div className="bg-black drop-shadow-2xl px-3 py-7 rounded-2xl flex flex-col gap-4">
              <p className="text-xs text-blue-200">{level}</p>
              <h1 className="text-5xl font-bold text-white">{amount}<span className="text-xs font-normal">/{duration}</span></h1>
              <p className="text-sm text-[#aaa]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni</p>
              <div className="flex flex-col gap-3 text-sm text-[#aaa]">
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-blue-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-blue-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={ standard ? "text-blue-200 size-6" : "size-6" }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={ standard ? "text-blue-200 size-6" : "size-6" }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={ advanced ? "text-blue-200 size-6" : "size-6" }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={ advanced ? "text-blue-200 size-6" : "size-6" }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <button className="w-full bg-white p-2 rounded-2xl text-black mt-[50px]">Choose plan</button>
            </div>

          </div>
            
        </div>
    </div>
  )
}

export default Price
