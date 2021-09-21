import { Carousel } from "react-bootstrap";

const ItemsCarousel = ({ events }) => {
  return (
    <Carousel slide={false} fade={false}>
      {events.eventmedia.length ? (
        events.eventmedia
          .filter((el) => el.file_type === "image")
          .map((el, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={el.file} alt="." />
            </Carousel.Item>
          ))
      ) : (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/250?text=Sorry!+No+image+Available"
            alt="."
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default ItemsCarousel;
