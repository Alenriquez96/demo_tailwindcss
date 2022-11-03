import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-[100px] bg-zinc-900 flex flex-row justify-evenly items-center text-white rounded-b-[50px] sm:rounded-none sticky top-0">
      <h1 className="text-center text-3xl absolute top-[35px] left-[45px]">
        Booking App
      </h1>
      <nav className="font-medium text-2xl invisible sm:visible sm:absolute sm:top-[35px] sm:right-[31px] w-[306px] flex place-content-evenly">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Sidebar />
    </header>
  );
};

export default Header;
