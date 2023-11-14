import React, { useEffect, useState } from "react";
import SingleTaskcomponent from "../SingleTaskcomponent/SingleTaskcomponent";
import Header from "../Header/Header";
import "./ByPriority.css";
import { DotsThreeCircle, Plus } from "@phosphor-icons/react";
// import SingleTaskcomponent from '../SingleTaskcomponent/SingleTaskcomponent';

const ByPriority = () => {
  const [StatusData, setStatusData] = useState([]);
  const [one, setOne] = useState([]);
  const [two, settwo] = useState([]);
  const [Three, setThree] = useState([]);
  const [Four, setFour] = useState([]);
  const [Five, setFive] = useState([]);

  const [items, setItems] = useState([
    { id: 1, title: 'Banana' },
    { id: 2, title: 'Apple' },
    { id: 3, title: 'Orange' },
    { id: 4, title: 'Grapes' },
  ]);

  const handleSort = () => {
    // Copy the array to avoid mutating the state directly
    const sortedItems = [...items];

    // Use the sort method to sort the array based on the 'title' property
    sortedItems.sort((a, b) => a.title.localeCompare(b.title));

    // Update the state with the sorted array
    setItems(sortedItems);
  };



  const fetchData = async () => {
    const response = await fetch(
      `https://api.quicksell.co/v1/internal/frontend-assignment`
    );
    const data = await response.json();
    // console.log(data);
    setStatusData(data.tickets);

    setOne(
      StatusData.filter((Element) => {
        return Element.priority === 0;
      })
    );

    settwo(
      StatusData.filter((Element) => {
        return Element.priority === 1;
      })
    );

    setThree(
      StatusData.filter((Element) => {
        return Element.priority === 2;
      })
    );

    setFour(
      StatusData.filter((Element) => {
        return Element.priority === 3;
      })
    );

    setFive(
      StatusData.filter((Element) => {
        return Element.priority === 4;
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
            <h3>No priority</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {one.map((Element) => {
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
            <h3>Low</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {two.map((Element) => {
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
            <h3>Medium</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Three.map((Element) => {
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
            <h3>High</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Four.map((Element) => {
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
            <h3>Urgent</h3>
            <div className="icons">
              <Plus size={23} className="plus"/>
              <DotsThreeCircle size={23} />
            </div>
          </div>

          <div className="componentdetails">
            {Five.map((Element) => {
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

export default ByPriority;
