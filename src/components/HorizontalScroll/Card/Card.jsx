/* eslint-disable react/prop-types */
//eslint will go nuts if i do not put the above line

import "./style.scss";
import { FaLocationDot } from "react-icons/fa6";
import { formatDate, getRandomImage } from "../../../util";
import { useRef, useEffect } from "react";

const Card = ({ event }) => {
  const formattedDate = formatDate(event.date);

  //Tried to use the link provided in the api, but it will just not work until i serve the downloadable link 
  //through a proxy server
  //const imgUrl = event.imgUrl;

  //so due to the above issue, used random image links from the internet.(the concepts will be the same)
  const imgUrl = getRandomImage();
  const elementRef = useRef(null);

  //this interSection observer will make sure that the images are lazy loaded, and not before they are visible...
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            //the element is visible
            const ele = entry.target;
            const src = ele.getAttribute("data-background-src");
            //update the background image
            ele.style.backgroundImage = `url(${src})`;
            observer.unobserve(ele);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(element);
    //cleanup function
    return () => {
      observer.unobserve(element);
    };
  });

  return (
    <div className="card " ref={elementRef} data-background-src={imgUrl}>
      <div className="text-card">
        <div className="upper">
          <span className="eventname">{event.eventName}</span>
          <span>{formattedDate}</span>
        </div>
        <div className="lower">
          <div className="location">
            <FaLocationDot></FaLocationDot>
            <span>{event.cityName}</span>
          </div>
          <span>{event.weather}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
