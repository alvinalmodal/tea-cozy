import Location from "./location";

const locations = [
  {
    id: 1,
    city: "Downtown",
    address1: "384 West 4th St.",
    address2: "Suite 108",
    address3: "Portland, Maine",
  },
  {
    id: 2,
    city: "East Bayside",
    address1: "3433 Phisherman's Avenue",
    address2: "(Northwest Corner)",
    address3: "Portland, Maine",
  },
  {
    id: 3,
    city: "Oakdale",
    address1: "515 Crescent Avenue",
    address2: "Second floor",
    address3: "Portland, Maine",
  },
];
const Locations = () => {
  const displayLocations = () => {
    return locations.map((location) => <Location {...location}></Location>);
  };
  return (
    <section className="location-section">
      <h3 className="location-header">Locations</h3>
      <article className="locations">{displayLocations()}</article>
    </section>
  );
};

export default Locations;
