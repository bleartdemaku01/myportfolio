import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="loading..." className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <Link to={`/readmore/${item.id}`} className="work__button">
        Demo<i className="bx bx-right-arrow-alt work__button-icon"></i>
      </Link>
      {/* <a href="/#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a> */}
    </div>
  );
};

export default WorksItems;
