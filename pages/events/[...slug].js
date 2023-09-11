// Import necessary modules and components from React and custom files
import { Fragment } from "react";
import { useRouter } from "next/router";

// Import a function to get filtered events and UI components
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

// Define a functional component for the filtered events page
function FilteredEventsPage() {
  // Access the Next.js router
  const router = useRouter();

  // Extract filter data from the query parameters in the URL
  const filterData = router.query.slug;

  // If filter data is not available, display a loading message
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // Extract the filtered year and month from the filter data
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Convert filtered year and month to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // Check for invalid filter conditions (e.g., out-of-range values)
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    // Display an error message and a button to show all events
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // Get filtered events based on the specified year and month
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // Check if no events match the filter criteria
  if (!filteredEvents || filteredEvents.length === 0) {
    // Display a message indicating no events were found and a button to show all events
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // Calculate the date object based on the filtered year and month
  const date = new Date(numYear, numMonth - 1);

  // Display the results title and a list of filtered events
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

// Export the FilteredEventsPage component as the default export
export default FilteredEventsPage;
