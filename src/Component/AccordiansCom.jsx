import Accordians from "./Accordians";
import React, { useState } from "react";

const AccordiansCom = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  // Single Selection
  const handleSingleSelection = (currentId) => {
    console.log(selected,"getId")
    setSelected(currentId === selected ? null : currentId);
  };

  // Multiple Selection
  const handleMultipleSelection = (getcurrentId) => {
    const cpyMultiple = [...multiSelect];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentId);
    // console.log(findIndexOfCurrentId,'findindex');

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getcurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiSelect(cpyMultiple);

    console.log(selected, multiSelect);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold">Accordians</h1>
        <div className="text-center m-5">
          <button
            onClick={() =>
              console.log(setEnableMultiselection(!enableMultiselection))
            }
            className="px-5 py-2 rounded-lg border bg-red-500 text-white font-semibold text-center"
          >
            Multiselection
          </button>
        </div>
        <div className="flex flex-col items-center gap-10">
          {Accordians && Accordians.length > 0
            ? Accordians.map((AccordiansItems) => {
                return (
                  <>
                    <div className="flex justify-center text-2xl gap-10 cursor-pointer">
                      <div
                        className="font-bold"
                        onClick={
                          enableMultiselection
                            ? () => handleMultipleSelection(AccordiansItems.id)
                            : () => handleSingleSelection(AccordiansItems.id)
                        }
                      >
                        {AccordiansItems.question}
                      </div>
                      <p className="font-bold">+</p>
                    </div>
                    {enableMultiselection
                      ? multiSelect.indexOf(AccordiansItems.id) !== -1 && (
                          <div className="text-center w-1/2">
                            {AccordiansItems.answer}
                          </div>
                        )
                      : selected === AccordiansItems.id && (
                          <div className="text-center w-1/2">
                            {AccordiansItems.answer}
                          </div>
                        )}
                  </>
                );
              })
            : "No data Found"}
        </div>
      </div>
    </>
  );
};

export default AccordiansCom;
