const Location = ({ city, address1, address2, address3 }) => {
  return (
    <article className="location">
      <h3>{city}</h3>
      <h5>{address1}</h5>
      <h5>{address2}</h5>
      <h5>{address3}</h5>
    </article>
  );
};

export default Location;
