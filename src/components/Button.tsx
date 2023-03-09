interface PropsButton {
  name: string;
}
const Button = ({ name }: PropsButton) => {
  return (
    <div>
      <button className=" border-gray-400 bg-gray-300 p-2 rounded-lg hover:bg-black hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
