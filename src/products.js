import luzDivia from "../src/assets/colombia-luz-davia-fierro.webp";
import layoTeraga from "../src/assets/ethiopia-layo-teraga.webp";
import davidMunoz from "../src/assets/honduras-david-munoz.webp";
import tolima from "../src/assets/phono-colombia-tolima.webp";
import stereoBlend from "../src/assets/stereo-blend.webp";
import anibalPineda from "../src/assets/honduras-anibal-pineda.webp";
import kenyaNyawira from "../src/assets/kenya-nyawira.webp";

const products = [
  {
    id: 1,
    name: "Colombia Luz Divia Fierro",
    price: 20,
    desc: "pineapple, hibiscus, honeycomb",
    location: "Huila",
    elevation: "1650m",
    process: "Fully washed",
    variety: "Pink Bourbon",
    image: luzDivia,
  },
  {
    id: 2,
    name: "Ethiopia Layo Teraga",
    price: 19,
    desc: "peach, cotton candy, hibiscus",
    location: "Guji",
    elevation: "2342m",
    process: "Fully washed",
    variety: "74110",
    image: layoTeraga,
  },
  {
    id: 3,
    name: "Honduras David Las Flores",
    price: 19,
    desc: "guava, apple blossom, panela",
    location: "Santa Barbara",
    elevation: "1620m",
    process: "Fully washed",
    variety: "Pacas & Catuai",
    image: davidMunoz,
  },
  {
    id: 4,
    name: "Phono",
    price: 19,
    desc: "black cherry, bosc pear, fudge",
    location: "Tolima",
    elevation: "1450m",
    process: "Fully washed",
    variety: "Castillo",
    image: tolima,
  },
  {
    id: 5,
    name: "Stereo Blend",
    price: 14,
    desc: "fig, blackberry jam, fudge",
    location: "50% Colombia/50% Kenya",
    elevation: "",
    process: "",
    variety: "",
    image: stereoBlend,
  },
  {
    id: 6,
    name: "Honduras Anibal Pineda",
    price: 17,
    desc: "red grape, cherry blossom, toffee",
    location: "Santa Barbara",
    elevation: "1550m",
    process: "Fully washed",
    variety: "Bourbon",
    image: anibalPineda,
  },
  {
    id: 7,
    name: "Kenya Nyawira",
    price: 18,
    desc: "blood orange, cola, maple",
    location: "Embu",
    elevation: "1400m",
    process: "Fully washed",
    variety: "SL28, SL34",
    image: kenyaNyawira,
  },
];

export default products;
