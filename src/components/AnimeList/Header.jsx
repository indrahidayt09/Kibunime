import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <h1 className="text-1xl  text-color-light">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm hover:text-color-primary text-color-light transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
