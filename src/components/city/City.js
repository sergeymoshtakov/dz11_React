import React from "react";
import potemkin from "../../assets/images/potemkin-stairs.jpg";
import opera from "../../assets/images/odessa-opera.jpg";
import richelieu from "../../assets/images/duke-de-richelieu.jpg";
import CityChild from './CityChild';
import CityChildClass from './CityChildClass';
import CityChildImg from './CityChildImg';
import './City.css';

class City extends React.Component {
  cityData = {
    name: "Odessa",
    country: "Ukraine",
    foundationYear: 1794,
    area: 160,
    population: 1000000,
    landmarks: [
        { name: "Potemkin Stairs", image: potemkin },
        { name: "Odessa Opera and Ballet Theater", image: opera },
        { name: "Duke de Richelieu Monument", image: richelieu },
    ],
  };

  render() {
    return (
      <section className="city-container">
        <CityChild name={this.cityData.name}  />
        <CityChildClass description={"Country: " + this.cityData.country} />
        <CityChildClass description={"Foundation year: " + this.cityData.foundationYear} />
        <CityChildClass description={"Area: " + this.cityData.area + "  km²"} />
        <CityChildClass description={"Population: " + this.cityData.population} />
        <CityChild name="Landmarks"  />
        <div className="landmarks">
            {this.cityData.landmarks.map((landmark, index) => (
                <div className="city-landmark" key={index}>
                    <CityChild name={landmark.name}  />
                    <CityChildImg image={landmark.image} />
                </div>
            ))}
        </div>
      </section>
    );
  }
}

export default City;