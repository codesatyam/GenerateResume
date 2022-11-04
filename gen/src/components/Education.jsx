import React from "react";

const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  //   edu1_year: "",
  //   edu1_qualification: "",
  //   edu2_school: "",
  //   edu2_year: "",
  //   edu2_qualification: "",
 
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            College/University/Board Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Graduation year
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu1_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label">
          College/University/Board Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Graduation year
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
             Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu2_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
