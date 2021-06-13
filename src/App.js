import { useState } from "react";
import "./App.css";
import { FaAngleRight } from "react-icons/fa";
const job = [
  {
    title: "Personal Banking Representative",
    company: "Simplii Financial/CIBC",
    description: [
      "Handled clients’ request by providing detailed, friendly, personalized and polite service to ensure customer satisfaction and retention, which resulted in multiple promoters and achieved scorecard targets. ",
      "Explored and memorized Simplii Financial banking products and services to be able to assist clients with their questions and requests quickly and efficiently",
      "Analyzed and diagnosed account information and used personal judgement to determine if correct client is on the phone; prevented exploitation of client personal banking information to fraudsters.",
      "Supported the last four groups of new hires in transitioning to the workplace by providing advises of handling client requests and assisting with inquires.",
    ],
    date: "April 2018 - March 24 2021",
  },
  {
    title: "Product Specialist",
    company: "Skechers",
    description: [
      "Accurately processed customer purchases into POS systems; manually inputting serial number of products without bar code, entering correct promotional codes for targeted items. ",
      "Prepared advertising displays and arranged merchandise as per directive to promote sales. Replenished merchandises to standard by ensuring that all styles are represented on the sales floor.",
      "Exceeded weekly goals with an average SPH of $120.00 CND and an average UPT of 1.85. Consistently a top seller, promoting a sportively competitive atmosphere.",
    ],
    date: "August 2016 – July 2018",
  },
  {
    title: "Sales Associate/Key Holder/Weekend Manager",
    company: "Walking on a Cloud",
    description: [
      "Performed managerial duties as a sale associated, such as opening and closing the POS system, performing settlements on debit/credit terminals, training new employees.",
      "Addressed customer inquires in a professional and friendly manner; received positive feedback from customers and superiors",
      "Excelled in making lasting positive impressions on customers; creating a clientele loyal to the business",
      "Learned the features of different types of footwear and brands to provide appropriate shoes for customers; including customers with special orthopedic needs",
      "Achieved weekly sale goals and maintained a monthly UPT average of 1.5 through suggestive selling, adding on accessories such as socks, creams and freshening spray",
    ],
    date: "May 2015 - August 2016 ",
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
      <h1 className="title">Experience</h1>
      <div className="underline"></div>
      <div className="subContainer">
        <div className="button-container">
          {jobList.map((job, id) => {
            return (
              <div>
                <button
                  key={id}
                  className={`job-button ${arrayIndex === id && "active"}`}
                  onClick={() => setIndex(id)}
                >
                  {job.company}
                </button>
              </div>
            );
          })}
        </div>
        <div className="job-container">
          <h1>{jobList[arrayIndex].company}</h1>

          <div className="job-position-date">
            <h3>{jobList[arrayIndex].title}</h3>

            <h3>{jobList[arrayIndex].date} </h3>
          </div>
          {jobList[arrayIndex].description.map((desc) => {
            return (
              <div className="job-description">
                <FaAngleRight size={32} className="bullet-point" />
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
