import ShopItemFunc from '../ShopItemFunc';
import ShopItemClass from '../ShopItemClass';
import Calendar from '../Calendar';
import './App.css';

const item = {
  brand: 'Tiger of Russia',
  title: 'Ivan coat',
  description: 'Minimalistic coat in wool-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in wool-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '$'
}

const curentDate = new Date(2021, 6, 2);

function App() {
  return (
    <>
      <div className="background-element" />
      <ShopItemFunc item={item} />
      <ShopItemClass item={item} />
      <Calendar date={curentDate} />
    </>
  );
}

export default App;
