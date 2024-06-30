import "./style.scss";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

//change this to the location provided by the user
const LOCATION = "Mumbai, India";

const NavBar = () => {
  return (
    <nav className="navbar">
      
      {/* mobile layout */}
      <div className="top">
        <div className="heading">
          <span className="title">BookUsNow</span>
          <div className="location">
            <FaLocationDot></FaLocationDot>
            <span>{LOCATION}</span>
            <IoIosArrowForward className="arrow"></IoIosArrowForward>
          </div>
        </div>
        <div className="links">
          <IoIosSearch className="link"></IoIosSearch>
          <FaHeart className="link"></FaHeart>
          <FaUser className="link"></FaUser>
        </div>
      </div>
      <div className="bottom">
      <div className="navLinks noScrollBar">
          <Link className="link">Live shows</Link>
          <Link className="link">Streams</Link>
          <Link className="link">Movies</Link>
          <Link className="link">Plays</Link>
          <Link className="link">Events</Link>
          <Link className="link">Sports</Link>
          <Link className="link">Activities</Link>
        </div>
      </div>

      {/* desktop layout */}
      <div className="start">
        <span className="title">BookUsNow</span>
        <div className="location">
          <FaLocationDot></FaLocationDot>
          <span>{LOCATION}</span>
          <IoIosArrowForward className="arrow"></IoIosArrowForward>
        </div>
      </div>
      <div className="middle">
        <SearchBar></SearchBar>
        <div className="navLinks">
          <Link className="link">Live shows</Link>
          <Link className="link">Streams</Link>
          <Link className="link">Movies</Link>
          <Link className="link">Plays</Link>
          <Link className="link">Events</Link>
          <Link className="link">Sports</Link>
          <Link className="link">Activities</Link>
        </div>
      </div>
      <div className="end">
        <Link className="favorites">
          <FaHeart></FaHeart>
          <span>Favorites</span>
        </Link>
        <Link className="signIn">
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
