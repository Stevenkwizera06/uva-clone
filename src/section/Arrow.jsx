import React from 'react'
import BsArrowRight from "react-icons/bs";

function Arrow() {
  return (
    <div className="pb-[0.1875rem] self-end">
      <div className="flex items-end text-[#bd0032] underline underline-offset-4">
        <p>More news</p>

        <BsArrowRight width={20} />
      </div>
    </div>
  );
}

export default Arrow
