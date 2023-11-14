import React, { useEffect, useState } from "react";
import SingleTaskcomponent from "../SingleTaskcomponent/SingleTaskcomponent";
import Header from "../Header/Header";
import { DotsThreeCircle, Plus } from "@phosphor-icons/react";
// import SingleTaskcomponent from '../SingleTaskcomponent/SingleTaskcomponent';

const ByUser = () => {
  const [StatusData, setStatusData] = useState([]);
  const [Anoop, setAnoop] = useState([]);
  const [Yogesh, setYogesh] = useState([]);
  const [Shankar, setShankar] = useState([]);
  const [Ramesh,setRamesh]=useState([]);
  const [Suresh,setSuresh]=useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.quicksell.co/v1/internal/frontend-assignment`
    );
    const data = await response.json();
    // console.log(data.users);

    setStatusData(data.tickets);

    setAnoop(
      StatusData.filter((Element) => {
        return Element.id === "CAM-1" || Element.id === "CAM-2" ;
      })
    );

    setYogesh(
      StatusData.filter((Element) => {
        return Element.id === "CAM-3" || Element.id === "CAM-4" ;
      })
    );

    setShankar(
      StatusData.filter((Element) => {
        return Element.id === "CAM-5";
      })
    );

    setRamesh(
      StatusData.filter((Element) => {
        return Element.id === "CAM-6"|| Element.id === "CAM-9";
      })
    );

    setSuresh(
      StatusData.filter((Element) => {
        return Element.id === "CAM-10";
      })
    );
  };

  useEffect(() => {
    fetchData();
    // AddItems();
  }, [StatusData]);

  return (
    <>
      <div className="taskContent">
        <div className="singlecomponent">
          <div className="heading">
            <h3>Anoop sharma</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Anoop.map((Element) => {
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
            <h3>Yogesh</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Yogesh.map((Element) => {
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
            <h3>Shankar Kumar</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Shankar.map((Element) => {
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
            <h3>Suresh</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Suresh.map((Element) => {
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
            <h3>Ramesh</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Ramesh.map((Element) => {
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
      </div>
    </>
  );
};

export default ByUser;
