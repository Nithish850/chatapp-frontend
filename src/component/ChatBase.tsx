import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/slices/mesasgeSlice";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function ChatBase() {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const [messageInput, setMessageInput] = useState({
    user: 0,
    message: "",
  });

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
      dispatch(
        addMessage({
          user: 1,
          message: msg,
        })
      );
    });
  }, []);

  const sendMesage = () => {
    dispatch(addMessage(messageInput));

    socket.emit("message", messageInput.message);

    setMessageInput({
      user: 0,
      message: "",
    });
  };
  return (
    <div className="chat-base h-full flex-col justify-between p-10 ">
      <div>
        <h1 className="text-3xl font-semibold text-center mb-3">ChatApp</h1>
        <hr />
      </div>
      <div className="h-[85%]">
        <div className="h-full overflow-auto scrollbar p-5">
          {message.map((msg, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col ${msg.user == 0 ? "items-end" : ""}`}
              >
                <p
                  className={`text-center text-neutral-300 my-2 py-2 rounded-3xl  w-fit px-3  ${
                    msg.user == 0 ? "bg-neutral-700 " : ""
                  }`}
                >
                  {msg.message}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" flex items-center bg-neutral-600 mx-20 px-10 py-2 rounded-2xl">
          <input
            type="text"
            value={messageInput.message}
            onChange={(e) =>
              setMessageInput({
                user: 0,
                message: e.target.value,
              })
            }
            onKeyUp={(e) => {
              e.key == "Enter" && sendMesage();
            }}
            className="message-input bg-transparent w-full border-none outline-none"
          />
          <button
            className="bg-neutral-700 hover:bg-neutral-800 rounded-full p-2 px-4"
            onClick={sendMesage}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBase;
