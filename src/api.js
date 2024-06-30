import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

//use the env file for the BASEURL, or simply put the url here 
//use only the base of the url (...HeyQ==  till here)
const BASEURL = "";

// use react query for efficient caching of api calls.
export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // the stale time has been set to 5 minutes, can be increased depending on the api
      }
    }
});

// loader, get all the home page data before loading the hero component [upcoming events page 1  and recommended shows ]
export const HeroLoader = (type) => async () => {
    const response = await queryClient.ensureQueryData({
      queryKey: ['recommendedShows'],
      queryFn: () =>{
        return axios.get(`${BASEURL}&type=${type}`);
      } ,
    });
    const response2 = await queryClient.ensureQueryData({
      queryKey: ['upcomingevents-1'],
      queryFn: () =>{
        return axios.get(`${BASEURL}&page=1&type=upcoming`);
      } ,
    });
    return {response ,response2};
}

//this loader is used when the user scrolls down and we need to fetch the upcoming events, since using react router, the 
//requests will be cached (can be seen in the devTools)
export const upcomingLoader = (page)=>async()=>{
    const response = await queryClient.ensureQueryData({
        queryKey:[`upcomingevents-${page}`],
        queryFn:()=>{
            return axios.get(`${BASEURL}&page=${page}&type=upcoming`);
        }
    });
    return response;
}
