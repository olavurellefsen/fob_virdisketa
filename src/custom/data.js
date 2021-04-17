
import { faShip, faIndustry, faTruck, faFish, faFileInvoice, faUtensils, faWarehouse, faRecycle, faRing, faStamp } from '@fortawesome/free-solid-svg-icons'


export const COMICS = {
  DC: 'Fiskivinna',
  MARVEL: 'Alivinna',
};

export const HEROES = [
  {
    name: 'Veiðiloyvir og kvotur',
    comics: 'Fiskivinna',
    rank: 0,
    icons: [faFileInvoice],
    color: "steelblue",
    description: "Veðirloyvir loyvir skipum at veiða fisk. Kvotur avmarka, hvussu nógv kann fiskast"
  },
  {
    name: 'Virking av veiddum fiski',
    comics: 'Fiskivinna',
    rank: 3,
    icons: [faIndustry],
    color: "steelblue",
    description: ""
  },
  {
    name: 'Fiskiveiða',
    comics: 'Fiskivinna',
    rank: 1,
    icons: [faShip],
    color: "steelblue",
    description: "Veiða eftir fiski."
  },
  {
    name: 'Landing av veiddum fiski',
    comics: 'Fiskivinna',
    rank: 2,
    icons: [faShip, faIndustry],
    color: "steelblue",
    description: ""
  },
  {
    name: 'Goymsla av veiddum fiski',
    comics: 'Fiskivinna',
    rank: 5,
    icons: [faWarehouse],
    color: "steelblue",
    description: ""
  },
  {
    name: 'Flutningur av veiddum fiski',
    comics: 'Fiskivinna',
    rank: 6,
    icons: [faTruck],
    color: "steelblue",
    description: ""
  },
  {
    name: 'Brúkarar, sum eta veiddan fisk',
    comics: 'Fiskivinna',
    rank: 7,
    icons: [faUtensils],
    color: "steelblue",
    description: ""

  },
  {
    name: 'Alifóður',
    comics: 'Alivinna',
    rank: 1,
    icons: [faFish],
    color: "olive",
    description: ""
  },
  {
    name: 'Aling',
    comics: 'Alivinna',
    rank: 2,
    icons: [faRing],
    color: "olive",
    description: ""
  },
  {
    name: 'Tøka av alifiski',
    comics: 'Alivinna',
    rank: 3,
    icons: [faShip, faIndustry],
    color: "olive",
    description: ""
  },
  {
    name: 'Kryvjing og slátur av alifiski',
    comics: 'Alivinna',
    rank: 4,
    icons: [faIndustry],
    color: "olive",
    description: ""
  },
  {
    name: 'Gagnnýtsla av hjávørum',
    comics: 'Alivinna',
    rank: 5,
    icons: [faRecycle, faIndustry],
    color: "olive",
    description: "Hjávørir eru vørir, ið uppkoa í samband við framleiðsuna av einari aðraði vøru. Eitt dømi um í tað alivinnuni er skarn frá fiski, sum eitt nú verður brúkt í biogassverkinum."
  },
  {
    name: 'Gagnnýtsla av hjávørum ',
    comics: 'Fiskivinna',
    rank: 4,
    icons: [faRecycle, faShip],
    color: "steelblue",
    description: "Hjávørir eru vørir, ið uppkoma í samband við framleiðsuna av einari aðraði vøru."
  },
  {
    name: 'Flutningur av alifiski',
    comics: 'Alivinna',
    rank: 6,
    icons: [faTruck],
    color: "olive",
    description: "Fluntingur av alifiski er, tá ið fyritøkan tekur alifiskin upp úr aliringinum, og flytir hann til t.d. eitt kryvjingarvirkið."
  },
  {
    name: 'Brúkarar, sum eta alifisk',
    comics: 'Alivinna',
    rank: 7,
    icons: [faUtensils],
    color: "olive",
    description: "Brúkarar, sum eta alifisk, eru vit øll, ið eta alifisk."
  },
  {
    name: 'Aliloyvi',
    comics: 'Alivinna',
    rank: 0,
    icons: [faRing, faStamp],
    color: "olive",
    description: "Aliloyvið krevst fyri at kunna ala t.d. fisk og tara."
  },
];
