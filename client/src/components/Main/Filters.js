import Filter from './Filter'
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
const Filters = () => {
  const factors = ["Today", "Priority", "Done"];
  const [activeFactor, setActiveFactor] = useState("Today");
  return ( 
      <ul className='mb-1 me-1d25 d-flex  gap-1d25'>
        {factors.map((factor) => (
          <li  key={uuidv4()} >
            <Filter 
              active={activeFactor === factor}
              setActiveFactor={setActiveFactor}
              factor={factor} />
          </li>
        ))}
      </ul>
  );
}
 
export default Filters;