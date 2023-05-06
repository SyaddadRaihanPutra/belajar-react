import React from "react";

const DashboardComponent = () => {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("berhasil di klik");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button className="btn btn-primary btn-block col-12" type="submit">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default DashboardComponent;
