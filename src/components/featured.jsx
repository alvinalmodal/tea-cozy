import FeaturedItem from "./featuredItem";
import BerryBlitz from "./../assets/img-berryblitz.jpg";
import Donut from "./../assets/img-donut.jpg";
import SpicedRum from "./../assets/img-spiced-rum.jpg";
import Myrtle from "./../assets/img-myrtle-ave.jpg";
import Bedford from "./../assets/img-bedford-bizarre.jpg";

const featuredItems = [
  {
    id: 1,
    imgSource: BerryBlitz,
    imgCaption: "Fall Berry Blitz Tea",
  },
  {
    id: 2,
    imgSource: SpicedRum,
    imgCaption: "Spiced Rum Tea",
  },
  {
    id: 3,
    imgSource: Donut,
    imgCaption: "Seasonal Donuts",
  },
  {
    id: 4,
    imgSource: Myrtle,
    imgCaption: "Myrtle Ave Tea",
  },
  {
    id: 5,
    imgSource: Bedford,
    imgCaption: "Bedford Bizarre Tea",
  },
];

const Featured = () => {
  const displayFeaturedItems = () => {
    return featuredItems.map((item) => (
      <FeaturedItem
        imgSource={item.imgSource}
        imgCaption={item.imgCaption}
      ></FeaturedItem>
    ));
  };
  return (
    <section className="featured-section">
      <h2>Tea of the Month</h2>
      <h4>What's Steeping at the Tea Cozy?</h4>
      <article className="featured-message"></article>
      <article className="featured-items">{displayFeaturedItems()}</article>
    </section>
  );
};

export default Featured;
