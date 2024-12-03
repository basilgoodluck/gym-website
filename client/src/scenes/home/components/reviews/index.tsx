import groupImages from "@/assets/groupReview.png"


const Reviews = () => {


  return (
    <div className="flex flex-col gap-4 px-6 mt-6 md:w-4/5 mx-auto">
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
        <div className="flex flex-col md:flex-row ">
          <div><img src={groupImages} alt="groupImages" /></div>
          <div>
            <div className="flex overflow-hidden">
              <div className="w-full border border-gray-600 p-3 rounded-2xl">
              Our personalized fitness consultations are designed to help you

Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit labore mollitia, dolore cupiditate illo est eius eveniet, magnam quibusdam nostrum voluptate fugit praesentium debitis accusamus! Aliquam eligendi quod totam.
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews