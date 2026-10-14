import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";
import { useEvents } from "./hooks/useEvents";

function App() {
  const { events, loading, error } = useEvents();

  return (
    <>
      <Navbar />
      <main>
        <h2>Welcome to CampusEvents</h2>
        {loading && <p>Loading events…</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && events.length === 0 && <p>No events found.</p>}
        {!error &&
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              location={event.location}
              price={event.price}
            />
          ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
