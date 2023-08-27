import { useEffect } from "react"

const Filter = ({active, setActiveFactor, factor, key, tasks, setTasks, showDoneTasks, setShowDoneTasks }) => {

  const handleActive = () => {

    setActiveFactor(factor)
    if (factor === "Done") {
      setShowDoneTasks(true)
    }
    if (factor === "Today") {
      setShowDoneTasks(pre => pre = false)
    }

    if (factor === "Priority") {
      // 先恢復原本
      setShowDoneTasks(pre => pre = false)
      const filteredTasks = tasks.filter(task => {
        if (showDoneTasks) {
          return task.state === "Done";
        } else {
          return true;
        }
      });
      // 在點擊 "Priority" 時觸發排序邏輯
      const sortedTasks = filteredTasks.slice().sort((a, b) => {
        // 將 "High" 排在前面，其次是 "Medium"，最後是 "Low"
        const priorityOrder = {
          High: 0,
          Medium: 1,
          Low: 2
        };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
      setTasks(sortedTasks);
    }

  }

  useEffect(() => {

  },[tasks])

  return ( 
    <button onClick={handleActive} className={`filter ${active ? 'active' : ''}`} key={key}>
      {factor}
    </button>
  );
}
 
export default Filter;