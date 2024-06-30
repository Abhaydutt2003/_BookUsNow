import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Upcoming from "../UpcomingEvents/Upcoming";
import "./style.scss";
import { FaArrowRight } from "react-icons/fa";

//The major visible component in the route.
const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="image-container">
        <div className="image"></div>
        <div className="text">
          <span className="upper">
            Discover exciting events happening around you , stay tuned for
            updates!
          </span>
          <br></br>
          <div className="wrapper">
            <span className="lower">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              rerum consequuntur odit ratione facere optio tenetur ab hic,
              quibusdam consectetur est quod exercitationem saepe possimus,
              commodi autem veritatis corrupti dolor.
            </span>
          </div>
        </div>
        <HorizontalScroll></HorizontalScroll>
        <div className="up-text">
          <span>Upcoming events</span>
          <FaArrowRight></FaArrowRight>
        </div>
        <Upcoming></Upcoming>
      </div>
    </section>
    </>
  );
};
export default Hero;
