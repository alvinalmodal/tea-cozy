const FeaturedItem = ({ imgSource, imgCaption }) => {
  return (
    <figure className="featured-item">
      <img src={imgSource} alt={imgCaption} />
      <figcaption>{imgCaption}</figcaption>
    </figure>
  );
};

export default FeaturedItem;
