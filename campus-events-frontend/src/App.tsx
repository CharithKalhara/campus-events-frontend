import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
 return (
 <>
 <Navbar />
 <main>
 <h2>Welcome to CampusEvents</h2>
 <EventCard
 title="Campus Tech Conference"
 location="Main Campus Hall"
 price={15}
/>
 </main>
 <Footer />
 </>
 );
}
export default App;