import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import RenderClouds, { CloudsType } from "./RenderClouds";

type QueryType = {
  [key: string]: CloudsType;
};

const AllClouds: FC = () => {
  const { data, status, isLoading, isError } = useQuery<QueryType>(
    ["clouds"],
    async () => {
      const response = await axios.get(`/api/clouds`);
      return response.data;
    }
  );

  const levelStyle: string = "capitalize text-xl font-semibold text-gray-800";

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <h4 className={levelStyle}>High Level</h4>
        <RenderClouds clouds={data.high} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h4 className={levelStyle}>Mid Level</h4>
        <RenderClouds clouds={data.mid} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h4 className={levelStyle}>Low Level</h4>
        <RenderClouds clouds={data.low} />
      </div>
    </div>
  );
};

export default AllClouds;
