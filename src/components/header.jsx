import BrandLogo from "./../assets/img-tea-cozy-logo.png";

const Header = () => {
  return (
    <header id="nav">
      <img src={BrandLogo} alt="tea-cozy" id="brand-logo" />
      <ul className="nav-items">
        <li>
          <a href="#mission">Mission</a>
        </li>
        <li>
          <a href="featured">Featured Tea</a>
        </li>
        <li>
          <a href="location">Location</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
