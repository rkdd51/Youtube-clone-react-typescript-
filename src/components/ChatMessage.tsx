import React from "react";
interface PropChatMessage {
  name: string;
  message: string;
}
const ChatMessage = ({ name, message }: PropChatMessage) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="w-8 h-8"
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="user"
      />
      <span className="pl-2 font-bold">{name}</span>
      <span className="pl-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
