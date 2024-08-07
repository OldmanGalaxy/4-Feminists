import './wildlife.css';
import Marquee from "react-fast-marquee";
import ExtinctAnimals from './ExtinctAnimals.jsx';
import NationalAnimals from "./NationalAnimals.jsx";
import DailyAnimal from './DailyAnimal.jsx';

export default function Wildlife() {
  return (
    <>
    <div className="wildlife-container">
      <section className="national-container">
        <div className="gap"></div>
          <div className="meet-container">
            <Marquee className="meet">Meet Our National Animals &nbsp;</Marquee>
          </div>
      </section>
      <NationalAnimals />
        <div className="extinct-container">
          <Marquee className="extinct"> Explore These Extinct Animals &nbsp;</Marquee>
        </div>
      <ExtinctAnimals />
      <div className="animal-model-container">
        <Marquee className="animal-model"> Animal of the Day &nbsp;</Marquee>
      </div>
      <DailyAnimal />
    </div>
    </>
  );
}