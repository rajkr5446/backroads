import "./Tours.css";
import Title from "../title/Title";
import { toursData } from "../../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text1="featured" text2="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          const { id, img, date, title, text, location, duration, cost } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="Scenary" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
