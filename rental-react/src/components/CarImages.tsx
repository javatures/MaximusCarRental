import React, { FC, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface Car {
  id: number;
  make: string;
  model: string;
  type: string;
  year: string;
  renterId: number;
}

interface Image {
  id: number;
  link: string;
  description: string;
  car: Car;
}

const CarImages: FC<{ car: Car }> = (props): JSX.Element => {
  const [images, setImages] = useState(Array<Image>());
  const carId = props.car.id;

  useEffect(() => {
    fetch('http://localhost:8080' + '/image/car/' + carId)
      .then(response => response.json())
      .then(data => { setImages(data); })
  }, [])

  let carouselItems = [];

  if(images != null) {
    if(images.length > 0) {
      for(let image of images) {
        carouselItems.push(
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.link}
              alt={image.description}
            />
            <Carousel.Caption>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      }
    }
  }

  return (
    <Carousel>
      {carouselItems}
    </Carousel>
  )
}



export default CarImages;