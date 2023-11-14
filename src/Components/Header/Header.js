import React, { useEffect, useState } from "react";
import "./Header.css";
import { CaretCircleDown, CaretCircleUp } from "@phosphor-icons/react";
// import { Link } from "@phosphor-icons/react/dist/ssr";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(false);
  const [circleValue, setcircleValue] = useState(true);
  const [selectOption, setselectOption] = useState();
  const [selectOptionordering,setselectOptionordering]=useState();

  const navigate = useNavigate();

  useEffect(()=>{
    if(selectOption === "status"){
      navigate(``);
    }
    else if(selectOption === "user"){
      navigate(`ByUser`);
    }
    else if(selectOption === "priorityforgrouping"){
      navigate(`ByPriority`);
    }
    else if(selectOption === "priorityforgrouping"){
      navigate(`ByPriority`);
    }
    else if(selectOption === "priorityforgrouping"){
      navigate(`ByPriority`);
    }

  },[selectOption])

  const OpenClose = () => {
    setcircleValue(!circleValue);
    setValue(!value);
  };

  const handleselectchange = (event) => {
    setselectOption(event.target.value);
  };

  const handleselectchangeOrdering = (event) => {
    setselectOptionordering(event.target.value);
  };

  return (
    <div className="header">
      <div className="button">
        <span>Display</span>
        {circleValue ? (
          <CaretCircleDown size={20} onClick={() => OpenClose()} />
        ) : (
          <CaretCircleUp size={20} onClick={() => OpenClose()} />
        )}
      </div>
      {value && (
        <div className="options">
          <div className="grouping">
            <span>Grouping</span>
            <div>
              {/* <span>Status</span>
              <CaretCircleDown size={20} /> */}

              <select
                onChange={handleselectchange}
                value={selectOption}
                className="buttons"
              >
                <option value="status">
                 Status
                </option>

                {/* <option value="status">
                    <Link to={`/ByStatus`}>Status</Link>
                  </option> */}

                <option value="user">
                User
                </option>

                <option value="priorityforgrouping">
                  Priority
                </option>
              </select>
            </div>
          </div>

          <div className="ordering">
            <span>ordering</span>
            <div>
              {/* <span>Priority</span>
              <CaretCircleDown size={20} /> */}
              <select
                onChange={handleselectchangeOrdering}
                value={selectOptionordering}
                className="buttons"
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
