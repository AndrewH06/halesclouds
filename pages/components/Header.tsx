import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-center">
      <h1 className="text-5xl font-semi`bold">
        <Link href="/">Hale's Clouds</Link>
      </h1>
    </div>
  );
};

export default Header;
