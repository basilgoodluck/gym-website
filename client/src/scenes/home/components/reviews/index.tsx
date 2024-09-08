import groupImages from "@/assets/groupReview.png"

type Props = {}

const Reviews = ({}: Props) => {
  return (
    <div className="flex flex-col gap-4 px-6 mt-6">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs">Reviews</p>
            <h1 className="text-2xl font-bold">FROM YOU</h1>
          </div>
          <button className="bg-black text-white rounded-xl text-sm py-2 px-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <p>Give review</p>
          </button>
        </div>          
        <div>
          <div><img src={groupImages} alt="groupImages" /></div>
          <div>
            <div className="flex overflow-hidden">
              <div className="w-full border border-gray-600 p-3 rounded-2xl">
                <div className="flex justify-between">
                  <p>Richard</p>
                  <p>Logo</p>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni, quidem atque blanditiis voluptas omnis inventore hic velit? Ullam quasi magnam amet qui?</p>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews