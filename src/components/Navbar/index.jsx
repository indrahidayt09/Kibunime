import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col justify-between p-4 gap-2">
        <div className="flex justify-between items-center">
          <Link href="/" className=" text-3xl text-color-primary">
            kibunime
          </Link>
          <UserActionButton />
        </div>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
