import { useState, useEffect } from "react";
import "./App.css";
import { FaAngleRight } from "react-icons/fa";

function App() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch("http://localhost:5000/job");
    const data = await response.json();

    setJobList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>LOADING</h1>
        <h3>Please Wait...</h3>
      </main>
    );
  }

  return (
    <div>
      <h1 className="title">Experience</h1>
      <div className="underline"></div>
      <div>
        <div className="subContainer">
          <div className="button-container">
            <h1 className="button-heading">Jobs</h1>
            {jobList.map((job, id) => {
              console.log(id);
              return (
                <div key={id}>
                  <button
                    key={id}
                    className={`job-button ${arrayIndex === id && "active"}`}
                    onClick={() => setArrayIndex(id)}
                  >
                    {job.company}
                  </button>
                  {id === 3 ? (
                    <h1 className="button-heading">Volunteer</h1>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="job-container">
            <h1>{jobList[arrayIndex].title}</h1>
            <h2>{jobList[arrayIndex].date}</h2>
            {jobList[arrayIndex].description.map((points, id) => {
              return (
                <div className="job-description" key={id}>
                  <FaAngleRight />
                  <p>{points}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
