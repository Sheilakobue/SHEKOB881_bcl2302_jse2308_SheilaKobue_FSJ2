/**
 * This is the EventDetailPage component, responsible for displaying details of a specific event.
 * @returns {JSX.Element} The JSX element representing the event detail page.
 */
import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

/**
 * Function representing the EventDetailPage component.
 * @returns {JSX.Element} The JSX element representing the event detail page.
 */
export default function EventDetailPage() {
  const router = useRouter();

  // Extract the eventId from the router's query parameters.
  const eventId = router.query.eventId;

  // Fetch event details using the eventId.
  const event = getEventById(eventId);

  // If no event is found, display an error message.
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  // Render event details including summary, logistics, and content.
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

