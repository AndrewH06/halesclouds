import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl font-semibold">
        <Link href="/">Hale&apos;s Clouds</Link>
      </h1>
      {/* <div>Link</div> */}
    </div>
  );
};

export default Header;
