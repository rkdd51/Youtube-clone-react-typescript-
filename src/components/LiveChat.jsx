import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  //Generate Random Name
  function generateRandomString(length) {
    let randomName = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      randomName += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      counter += 1;
    }
    return randomName;
  }

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomString(5),
          message: generateRandomString(20) + "🥳",
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 bg-slate-100 w-full border p-2 border-black h-[500px] overflow-y-scroll flex flex-col-reverse">
        {chatMessage?.map((s) => (
          <ChatMessage name={s.name} message={s.message} />
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rahul",
              message: liveChat,
            })
          );
        }}
      >
        <input
          className="border border-black w-full m-2 p-1 rounded-lg"
          onChange={(e) => setLiveChat(e.target.value)}
        />
        <button className="border border-gray-300 p-2 m-2 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
