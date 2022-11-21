import ImageCarousel from "./ImageCarousel";

export type CloudsType = {
  [key: string]: {
    images: Array<string>;
    description: string;
    formation: string;
    indicates: string;
    precipitation: number;
    rarity: number;
  };
};

const RenderClouds = ({ clouds }: { clouds: CloudsType }): JSX.Element => {
  console.log(Object.entries(clouds));
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.entries(clouds).map((cloud, index) => {
        return (
          <div>
            <h4 className="capitalize text-xl font-semibold">{cloud[0]}</h4>
            <ImageCarousel images={cloud[1].images} cloud={cloud[0]} />
          </div>
        );
      })}
    </div>
  );
};

export default RenderClouds;
