import dayjs from "dayjs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer px-6 grid items-center ">
        <div className="flex flex-row justify-between  max-sm:flex-col max-sm:items-center   ">
          <p className="m-0">
            Copyright &copy; {dayjs().format("YYYY")} All Rights Reserved{" "}
          </p>
          <p className="m-0">
            Made by <Link>Bunny</Link>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
