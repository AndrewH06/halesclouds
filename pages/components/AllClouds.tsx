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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data.mid);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h4 className="mx-auto capitalize text-2xl">High Level</h4>
        <RenderClouds clouds={data.high} />
        <h4 className="mx-auto capitalize text-2xl">Mid Level</h4>
        <RenderClouds clouds={data.mid} />
        <h4 className="mx-auto capitalize text-2xl">Low Level</h4>
        <RenderClouds clouds={data.low} />
      </div>
    </div>
  );
};

export default AllClouds;
