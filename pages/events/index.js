import { Fragment } from "react";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/events-search";

export default function AllEventPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList item={events} />
    </Fragment>
  );
}
