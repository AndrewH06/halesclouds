import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ImageCarousel = ({
  images,
  cloud,
}: {
  images: Array<string>;
  cloud: string;
}) => {
  return (
    <div className="height-[400px]">
      <Carousel
        infiniteLoop={true}
        // showArrows={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        swipeable={true}
        width="400px">
        {images.map((image, index) => (
          <div className="w-[400px] h-[400px]">
            <Image fill alt="cloud" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
