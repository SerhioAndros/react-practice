import data from "../../../data";
import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul>
        {data.header.map((headerItem) => (
          <li key={headerItem}>{headerItem}</li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
