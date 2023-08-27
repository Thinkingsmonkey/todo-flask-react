import Filter from './Filter'
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
const Filters = ({ tasks, setTasks, showDoneTasks, setShowDoneTasks }) => {
  const factors = ["Today", "Priority", "Done"];
  const [activeFactor, setActiveFactor] = useState("Today");
  return ( 
      <ul className='mb-1 me-1d25 d-flex  gap-1d25'>
        {factors.map((factor) => (
          <li  key={uuidv4()} >
            <Filter 
              active={activeFactor === factor}
              setActiveFactor={setActiveFactor}
              factor={factor} 
              tasks={tasks}
              setTasks={setTasks}
              showDoneTasks={showDoneTasks}
              setShowDoneTasks={setShowDoneTasks}
              />
          </li>
        ))}
      </ul>
  );
}
 
export default Filters;