import { useNavigate } from "react-router";

const CommonButton = ({ text = "Click Me", link = "/", onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // custom handler
    } else {
      navigate(link); // dynamic route navigation
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer"
        style={{
          backgroundImage: `url('/images/bgbutton.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default CommonButton;
