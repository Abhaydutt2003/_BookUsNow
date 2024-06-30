import { useLoaderData } from "react-router-dom";
import "./style.scss";
import Card from "./Card/Card";
import { FaArrowRight } from "react-icons/fa";

const HorizontalScroll = () => {
  const { response } = useLoaderData();//use the loader data that is fetched during the inital render of the application.
  console.log(response);
  return (
    <>
      <div className="text-scroll">
        <div className="recshows">
          <span>Recommended shows</span>
          <FaArrowRight></FaArrowRight>
        </div>
        <span className="seeall">See all</span>
      </div>
      {/* map through the events and send the adequate data to the card */}
      <div className="hscroll noScrollBar">
        {response.data.events.map((event, index) => {
          return <Card event={event} key={index}></Card>;
        })}
      </div>
    </>
  );
};

export default HorizontalScroll;
