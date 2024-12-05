import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const getvalue = (event) => {
    const value = event.target.value;
    if (value === "C") {
      setData(""); 
    } else if (value === "D") {
      setData(data.slice(0, -1)); 
    } else {
      setData(data.concat(value));
    }
  };

  const calculation = () => {
    try {
      setData(eval(data).toString());
    } catch (error) {
      setData("Error");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
        <div className="bg-gray-900 border-2 border-gray-900 font-mono shadow-2xl rounded-lg w-full max-w-lg">
          <form action="" className="border-b-2 border-gray-900">
            <input
              type="text"
              className="rounded-t-lg bg-transparent text-right text-white focus:bg-gray-700 p-6 outline-none text-3xl w-full"
              value={data}
              readOnly
            />
          </form>
          {/* Buttons */}
          <div className="p-4 text-white grid grid-cols-4 gap-3 text-lg sm:text-xl">
            <button
              className="font-mono col-span-3 bg-blue-500 rounded-lg p-4 hover:bg-blue-400"
              value="C"
              onClick={getvalue}
            >
              C
            </button>
            <button
              className="font-mono bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              value="/"
              onClick={getvalue}
            >
              &divide;
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="1"
              onClick={getvalue}
            >
              1
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="2"
              onClick={getvalue}
            >
              2
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="3"
              onClick={getvalue}
            >
              3
            </button>
            <button
              className="font-mono bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              value="*"
              onClick={getvalue}
            >
              X
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="4"
              onClick={getvalue}
            >
              4
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="5"
              onClick={getvalue}
            >
              5
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="6"
              onClick={getvalue}
            >
              6
            </button>
            <button
              className="font-mono bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              value="-"
              onClick={getvalue}
            >
              -
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="7"
              onClick={getvalue}
            >
              7
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="8"
              onClick={getvalue}
            >
              8
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="9"
              onClick={getvalue}
            >
              9
            </button>
            <button
              className="font-mono bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              value="+"
              onClick={getvalue}
            >
              +
            </button>
            <button
              className="font-mono bg-gray-500 hover:bg-gray-400 rounded-lg p-4"
              value="0"
              onClick={getvalue}
            >
              0
            </button>
            <button
              className="font-mono bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              value="D"
              onClick={getvalue}
            >
              D
            </button>
            <button
              className="font-mono col-span-2 bg-purple-500 hover:bg-gray-400 rounded-lg p-4"
              onClick={calculation}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
 
