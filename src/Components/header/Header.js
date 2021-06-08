import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
// import sprite from "../../images/icon/header/sprite.svg";

const Header = () => {
  return (
    <HeaderContainer>
      {/* <svg>
        <img
          // className={"icon-logo"}
          src={`${sprite}+'icon-home'`}
          alt="home img"
        />
      </svg> */}
      <HeaderList />
    </HeaderContainer>
  );
};

export default Header;
