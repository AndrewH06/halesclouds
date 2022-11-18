import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FC } from "react";

interface Props {
  clouds: Array<string>;
}

const AllClouds = ({ clouds }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      {clouds.map((cloudClass: string) => {
        const { data, status } = useQuery([{ cloudClass }], async () => {
          const response = await axios.get(
            `${"http://localhost:3000"}/api/${cloudClass}`
          );
          return response.data;
        });

        return (
          <div className="flex flex-col">
            {data && (
              <>
                <h4 className="text-xl capitalize">{data[0].class}</h4>
                <div className="flex w-screen flex-wrap gap-4">
                  {data.map(({ image, name }: any) => {
                    return (
                      <div className="flex flex-col">
                        <Image
                          alt={name}
                          src={image}
                          width={150}
                          height={150}
                        />
                        <p className="max-w-[150px] text-gray-500">{name}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllClouds;
