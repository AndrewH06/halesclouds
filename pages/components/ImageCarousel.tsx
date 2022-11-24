import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ImageCarousel = ({
  images,
  cloud,
}: {
  images: Array<string>;
  cloud: string;
}): JSX.Element => {
  if (!images) return <div>Error</div>;
  return (
    <div className="height-[300px]">
      <Carousel
        infiniteLoop={true}
        // showArrows={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        width="300px">
        {images.map((image, index) => (
          <div key={index} className="w-[300px] h-[300px]">
            <Image fill alt={cloud} src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
