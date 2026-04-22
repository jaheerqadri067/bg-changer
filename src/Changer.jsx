import { useState } from "react";

export default function Changer() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen fixed flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed text-center rounded-2xl p-2 bg-white flex flex-wrap gap-4 bottom-6 duration-800">

        <div>
          <button
            className="bg-red-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>
        <div>
          <button
            className="bg-green-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
        <div>
          <button
            className="bg-blue-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
        <div>
          <button
            className="bg-purple-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("")}
          >
            Purple
          </button>
        </div>
        <div>
          <button
            className="bg-pink-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
        </div>
        <div>
          <button
            className="bg-yellow-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
        <div>
          <button
            className="bg-white text-black py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("white")}
          >
            White
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
        </div>
        <div>
          <button
            className="bg-olive-600 text-white py-0.5 px-5 text-lg rounded-lg cursor-pointer"
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}
