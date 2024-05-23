import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Faccordian = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <div className="w-[50%]">
        <div
          onClick={() => setShow(!show)}
          className="flex justify-between items-center"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            quidem?
          </p>
          {show == true ? <RxCross2 /> : <FaPlus />}
        </div>
        {show && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eius perspiciatis fugit illo? Eius rem mollitia minima quibusdam,
            aliquam ad obcaecati officia alias velit eaque nam voluptatibus hic
            tempore asperiores.
          </p>
        )}
      </div>
    </>
  );
};

export default Faccordian;
