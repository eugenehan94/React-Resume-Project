import { useState } from "react";

const job = [
  {
    title: "Personal Banking Representative",
    company: "Simplii Financial/CIBC",
    description: ["SC description 1", "SC description 2", "description 3"],
    date: "this date to this date",
  },
  {
    title: "Product Specialist",
    company: "Skechers",
    description: [
      "SK description 1",
      "description 2",
      "description 3",
      "description 4",
    ],
    date: "this date to this date",
  },
  {
    title: "REFER to RESUME",
    company: "Walking on a Cloud",
    description: ["WOAC description 1", "description 2", "description 3"],
    date: "this date to this date",
  },
];

function App() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [jobList, setJobList] = useState(job);

  const setIndex = (id) => {
    setArrayIndex(id);
  };

  return (
    <div>
      <h1>Experience</h1>

      {jobList.map((job, id) => {
        return (
          <div>
            <button key={id} onClick={() => setIndex(id)}>
              {job.company}
            </button>
          </div>
        );
      })}

      <div>
        <h1>{jobList[arrayIndex].company}</h1>

        <h3>{jobList[arrayIndex].title}</h3>

        <h4>{jobList[arrayIndex].date} </h4>

        {jobList[arrayIndex].description.map((desc) => {
          return <p>{desc}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
