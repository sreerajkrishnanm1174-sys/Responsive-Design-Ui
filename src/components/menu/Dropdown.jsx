import React from "react";
import { useState } from "react";
import NameIconbtn from "../Button/NameIconbtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-fit w-fit flex justify-between items-center">

      <div className="relative h-fit w-fit">
        <NameIconbtn name="Card access" onClick={() => setOpen(!open)} icon={ <FontAwesomeIcon icon={faChevronDown}  />}/>
        

        {open && (
          <div className="absolute left-6 mt-2 w-48 bg-amber-300 shadow rounded">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">Dashboard</li>
              <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
