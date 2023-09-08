/**
 * Import necessary modules and components.
 */
import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import EventSearch from "@/components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

/**
 * Define the AllEventsPage component.
 *
 * This component represents a page that displays a list of events
 * and allows users to search for events by year and month.
 */
export default function AllEventsPage() {
  // Fetch all events data
  const events = getAllEvents();

  // Access the Next.js router for programmatic navigation
  const router = useRouter();

  /**
   * Handle the event search by year and month.
   *
   * @param {number} year - The selected year for the search.
   * @param {number} month - The selected month for the search.
   */
  function findEventsHandler(year, month) {
    // Construct the full path for the event search
    const fullPath = `/events/${year}/${month}/abc`;

    // Use Next.js router to navigate to the constructed path
    router.push(fullPath);
  }

  // Render the component's JSX structure
  return (
    <Fragment>
      {/* Render the EventSearch component and pass the findEventsHandler function */}
      <EventSearch onSearch={findEventsHandler} />

      {/* Render the EventList component and pass the events data as items */}
      <EventList items={events} />
    </Fragment>
  );
}
