const Edit = () => {
  return (
    <div className="edit-container">
      <div className="container edit bg-white py-3d5 px-4d5 d-flex flex-column gap-1d25 text-filed">
        <div className="edit__head d-flex justify-content-between">
          <div className="edit__title">
            <h2 className="fw-bold mb-d25">TITLE</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Your Task Title"
              type="text"
            />
          </div>
          <div className="edit__priority w-30">
            <h2 className="fw-bold mb-d25">PRIORITY</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="text"
            />
          </div>
        </div>
        <div className="edit__body d-flex justify-content-between">
          <div className="edit__state w-30">
            <h2 className="fw-bold mb-d25">STATE</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="text"
            />
          </div>
          <div className="edit__start w-30">
            <h2 className="fw-bold mb-d25">START</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="text"
            />
          </div>
          <div className="edit__deadline w-30">
            <h2 className="fw-bold mb-d25">DEADLINE</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="text"
            />
          </div>
        </div>
        <div className="edit__footer text-center ">
          <div className="edit__descript mb-1d25">
            <h2 className="fw-bold text-start mb-d25">DESCRIPT</h2>
            <textarea
              className="border border-2 border-filed rounded-pill w-100 p-1 pt-d5"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Task"
            ></textarea>
          </div>
          <p className="btn btn-primary mx-auto">Add Task</p>
        </div>
      </div>
    </div>
  );
};

export default Edit;
