import { useEffect } from "react"

const Filter = ({active, setActiveFactor, factor, key, tasks, setTasks, showDoneTasks, setShowDoneTasks, setFilter }) => {
  
  const handleActive = () => {
    setActiveFactor(factor)
    setFilter(factor)
  }

  return ( 
    <button onClick={handleActive} className={`filter ${active ? 'active' : ''}`} key={key}>
      {factor}
    </button>
  );
}

export default Filter;