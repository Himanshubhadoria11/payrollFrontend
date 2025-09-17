

import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";
const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [jobname, setJobName] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  // Function to handle file input changes
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    e.preventDefault();
    // console.log(name,email,coverLetter,phone,address,resume)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("jobname", jobname);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobid", id);

    try {
      const { data } = await axios.post("/api/post",formData);
      console.log(data)
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setJobName("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      //console.log(error)
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    // <section className="application">
    //   <div className="container">
    //     <h3>Application Form</h3>
    //     <form onSubmit={handleApplication}>
    //       <input
    //         type="text"
    //         placeholder="Your Name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <input
    //         type="email"
    //         placeholder="Your Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="number"
    //         placeholder="Your Phone Number"
    //         value={phone}
    //         onChange={(e) => setPhone(e.target.value)}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Your Address"
    //         value={address}
    //         onChange={(e) => setAddress(e.target.value)}
    //       />
    //       <textarea
    //         placeholder="CoverLetter..."
    //         value={coverLetter}
    //         onChange={(e) => setCoverLetter(e.target.value)}
    //       />
    //       <div>
    //         <label
    //           style={{ textAlign: "start", display: "block", fontSize: "20px" }}
    //         >
    //           Select Resume
    //         </label>
    //         <input
    //           type="file"
    //           accept=".pdf, .jpg, .png"
    //           onChange={handleFileChange}
    //           style={{ width: "100%" }}
    //         />
    //       </div>
    //       <button type="submit">Send Application</button>
    //     </form>
    //   </div>
    // </section>
    <div className="col-md-8 mx-auto px-4">
      <h2 className="text-center my-4">Job Application Form</h2>
      <form
        onSubmit={handleApplication}
        className="shadow-lg p-4 rounded bg-light"
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Cover Letter"
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
            required
          />
        </div>
       <div className="mb-3">
       <textarea
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your Address"
            rows="3"
            required
          />

       </div>
       
          <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={jobname}
            onChange={(e) => setJobName(e.target.value)}
            placeholder="Your jobname"
            required
          />
        </div>
         
        <div className="mb-3">
          <input
            type="file"
            accept=".pdf, .png, .jpg, .jpeg"
            className="form-control"
            onChange={handleFileChange}
            required
          />
          {resume && (
            <div className="mt-2 text-muted">
              <strong>File Selected:</strong> {resume.name}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
