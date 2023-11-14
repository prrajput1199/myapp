import React, { useEffect, useState } from "react";
import SingleTaskcomponent from "../SingleTaskcomponent/SingleTaskcomponent";
import "./Bystatus.css";
import { DotsThreeCircle, Plus } from "@phosphor-icons/react";


const ByStatus = () => {
  const [StatusData, setStatusData] = useState([]);
  const [Backlogdata, setBacklogData] = useState([]);
  const [Tododata, settododata] = useState([]);
  const [Inprogressdata, setInprogressdata] = useState([]);
  const [donedata, setdonedodata] = useState();
  const [cancelleddata, setcancelleddata] = useState();

  const fetchData = async () => {
    const response = await fetch(
      `https://api.quicksell.co/v1/internal/frontend-assignment`
    );

    const data = await response.json();

    setStatusData(data.tickets);

    setBacklogData(
      StatusData.filter((Element) => {
        return Element.status === "Backlog";
      })
    );

    settododata(
      StatusData.filter((Element) => {
        return Element.status === "Todo";
      })
    );

    setInprogressdata(
      StatusData.filter((Element) => {
        return Element.status === "In progress";
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [StatusData]);

  // eslint-disable-next-line
  return (
    <>
      <div className="taskContent">
        <div className="singlecomponent">
          <div className="heading">
            <h3>Backlog</h3>

            <div className="icons">
              <Plus size={23} className="plus" />
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Backlogdata.map((Element) => {
              return (
                <>
                  <SingleTaskcomponent
                    key={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="singlecomponent">
          <div className="heading">
            <h3>To do</h3>
            <div className="icons">
              <Plus size={23} className="plus" />
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Tododata.map((Element) => {
              return (
                <>
                  <SingleTaskcomponent
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="singlecomponent">
          <div className="heading">
            <h3>In progress</h3>
            <div className="icons">
              <Plus size={23} className="plus" />
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Inprogressdata.map((Element) => {
              return (
                <>
                  <SingleTaskcomponent
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="singlecomponent">
          <div className="heading">
            <h3>Done</h3>
            <div className="icons">
              <Plus size={23} className="plus" />
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            <div className="Tasks">
              {/* <p>{key}</p>
                <h3>{title}</h3> */}
              <span>... Feature Request</span>
            </div>
          </div>
        </div>

        <div className="singlecomponent">
          <div className="heading">
            <h3>Cancelled</h3>
            <div className="icons">
              <Plus size={23} className="plus" />
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            <div className="Tasks">
              {/* <p>{key}</p>
                <h3>{title}</h3> */}
              <span>... Feature Request</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByStatus;
