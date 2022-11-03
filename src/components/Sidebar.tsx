import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (): JSX.Element => {
  const [visibility, setVisibility]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const updateVisibility = (): void => {
    setVisibility(!visibility);
  };

  return (
    <div className="sm:invisible">
      {!visibility ? (
        <svg
          className="cursor-pointer z-10 absolute right-[28px] top-[48px]"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={updateVisibility}
        >
          <path
            d="M0.75 0.75H17.25M0.75 6H17.25M0.75 11.25H17.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          className="cursor-pointer z-10 absolute right-[28px] top-[48px]"
          onClick={updateVisibility}
        >
          <path
            strokeWidth="1.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}

      <div
        className={`top-0 fixed right-0 h-screen w-[290px] bg-zinc-900 text-white shadow-lg  flex justify-center items-center transition-all ${
          visibility ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col text-[20px]">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
