import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";
import data from "../../data";

const Main = () => {
  return (
    <main>
      <PhoneList phones={data.phones} />
      <LaptopList laptops={data.laptops} />
    </main>
  );
};

export default Main;
