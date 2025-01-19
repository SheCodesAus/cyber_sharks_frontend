import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Button from "../Button";

function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-customWhite">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-cormorant font-bold text-customBlack"
      >
        Tech Speakers/Prism
      </Link>

      {/* include existing NavBar */}
      <div className="flex items-center gap-4">
        <NavBar />
        <Button>Join Us</Button>
      </div>
    </header>
  );
}

export default Header;
