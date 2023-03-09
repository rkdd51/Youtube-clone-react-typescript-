import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonNames: string[] = [
    "All",
    "news",
    "Learning",
    "Funny",
    "World Affairs",
    "React Coding",
    "Redux",
    "Next",
  ];
  return (
    <div className="flex gap-4 border-rounded-lg invisible lg:visible xl:visible 2xl:visible 3xl:visible">
      <Button name={ButtonNames[0]} />
      <Button name={ButtonNames[1]} />
      <Button name={ButtonNames[2]} />
      <Button name={ButtonNames[3]} />
      <Button name={ButtonNames[4]} />
      <Button name={ButtonNames[5]} />
      <Button name={ButtonNames[6]} />
      <Button name={ButtonNames[7]} />
    </div>
  );
};

export default ButtonList;
