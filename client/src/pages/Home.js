// Home.js
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/Main/Main";
import { useNavigate } from "react-router-dom";
import Edit from "../components/Edit";
import { useAuth } from "../components/AuthContext";

function Home(member_id) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]); // 監控 tasks 狀態
  const [showDoneTasks, setShowDoneTasks] = useState(false); // 控制是否只顯示 Done 的 task
  const filteredTasks = showDoneTasks
    ? tasks.filter((task) => task.state === "Done")
    : tasks; // 若只顯示 Done，過濾出 Done 賦值給新 array，若否則維持原樣，將此 array prop 給渲染元件

  const [showEdit, setShowEdit] = useState(false);
  const [taskInfo, setTaskinfo] = useState({
    title: "",
    priority: "Medium",
    state: "",
    start: "",
    deadline: "",
    description: "",
    method: "", // edit or add task
  });
  const handleEdit = (newTaskInfo) => {
    setTaskinfo((preTaskInfo) => ({ ...preTaskInfo, ...newTaskInfo }));
    setShowEdit(true);
  };

  //! 開發用記得刪除、重開
  // const url = "/api/test";
  // const [login, isPanding] = useLoginState(url);
  let isPanding = false;

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {isPanding ? (
        <h2>Panding...</h2>
      ) : (
        isLoggedIn && (
          <>
            <Header
              tasks={tasks}
              setTasks={setTasks}
              handleEdit={handleEdit}
              setShowEdit={setShowEdit}
            />
            <Main
              showDoneTasks={showDoneTasks}
              setShowDoneTasks={setShowDoneTasks}
              tasks={filteredTasks}
              setTasks={setTasks}
              handleEdit={handleEdit}
            />
            {showEdit && (
              <Edit
                tasks={tasks}
                setTasks={setTasks}
                taskInfo={taskInfo}
                setShowEdit={setShowEdit}
              />
            )}
          </>
        )
      )}
    </div>
  );
}

export default Home;
