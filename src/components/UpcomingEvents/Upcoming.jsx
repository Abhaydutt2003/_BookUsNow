import { useLoaderData } from "react-router-dom";
import "./style.scss";
import Card from "./Card/Card-up";
import { useEffect, useState } from "react";
import { upcomingLoader } from "../../api";

const Upcoming = () => {
  const { response2 } = useLoaderData();
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState(response2.data.events);
  const [isloading, setIsLoading] = useState(false);
  
  //use Effect to keep track of change in the page number
  useEffect(() => {
    if (page != 1) {
      fetchEvents(page);
    }
  }, [page]);

  //used to fetch the next page from the api, called when the page number is changed in the api
  const fetchEvents = async () => {
    setIsLoading(true);
    const fetchNext = upcomingLoader(page);
    const response = await fetchNext();
    setEvents((prevEvent) => [...prevEvent, ...response.data.events]);
    setIsLoading(false);
  };

  return (
    <div className="upcoming">
      {events.map((event, index) => {
        return (
          <Card
            event={event}
            key={index}
            last={index === events.length - 1}
            page={page}
            setPage={setPage}
          />
        );
      })}
      {isloading && <span className="loading">Loading ...</span>}
    </div>
  );
};
export default Upcoming;
