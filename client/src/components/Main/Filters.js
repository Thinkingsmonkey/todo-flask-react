import Filter from './Filter'
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
const Filters = ({ tasks, setTasks, showDoneTasks, setShowDoneTasks, setFilter }) => {
  const factors = ["Today", "Priority", "Done", "All"];
  const [activeFactor, setActiveFactor] = useState("Today");
  return ( 
      <ul className='filters mb-1 d-flex  gap-1d25 flex-wrap justify-content-center '>
        {factors.map((factor) => (
          <li key={uuidv4()} >
            <Filter 
              active={activeFactor === factor}
              setActiveFactor={setActiveFactor}
              factor={factor} 
              tasks={tasks}
              setTasks={setTasks}
              showDoneTasks={showDoneTasks}
              setShowDoneTasks={setShowDoneTasks}
              setFilter={setFilter}
              />
          </li>
        ))}
      </ul>
  );
}
 
export default Filters;