import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/events-search";

export default function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();
  
  function findEventsHandler(year,month){
    const fullPath = '/events/${year}/${month}';
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList item={events} />
    </Fragment>
  );
}
