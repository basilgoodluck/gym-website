import { memo, useState } from "react"

type Props = {}

const GoalButton = memo(({goal, isSelected, onClick}: {goal: string, isSelected: boolean, onClick: () => void }) => {
  return(
    <button 
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded ${isSelected ? "bg-black text-white" : "bg-gray-200 text-black"}`}
    > {goal} </button>
  )
} )
const MembershipDetails = ({}: Props) => {
  const [selectedGoals, setSetSelectedGoals] = useState<string[]>([])
  const goals = ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7", "Goal 8", "Goal 9"];

  const toggleGoal = (goal: string) => {
    setSetSelectedGoals((prevGoals) => 
      prevGoals.includes(goal) 
      ? prevGoals.filter((g) => g !== goal)
      : [...prevGoals, goal]
    )
  }

  return (
    <div className="flex flex-col gap-2">
        <h2>Membership Details</h2>
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <button type="button" className="bg-gray-200 py-1 rounded-md w-full"  >
                <select className={`cursor-pointer appearance-none bg-transparent outline-none bg-gray-200 border-0 text-sm`}>
                    <option className="bg-gray-200 text-sm]"  disabled selected>Select Plan</option>
                    <option className="text-xs text-center">Male</option>
                    <option className="text-xs text-center">Female</option>
                </select>
              </button>  
              <p className=" whitespace-nowrap px-3 bg-gray-200 rounded-md text-sm flex justify-center items-center">Plan duration</p>              
            </div>
            <div className="flex justify-between gap-4">
              <p className="w-full py-2 whitespace-nowrap px-3 bg-gray-200 rounded-md text-sm flex justify-center items-center">Start date</p>              
              <p className="w-full py-2 whitespace-nowrap px-3 bg-gray-200 rounded-md text-sm flex justify-center items-center">End date</p>              
            </div>
            <div className="flex flex-col gap-2">
              <h4>Your goals</h4>
              <div className="grid grid-cols-4 gap-3">    
                {goals.map((goal) => (
                  <GoalButton 
                    key={goal}
                    goal={goal}
                    isSelected={selectedGoals.includes(goal)}
                    onClick={() => toggleGoal(goal)}
                  />
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default MembershipDetails
