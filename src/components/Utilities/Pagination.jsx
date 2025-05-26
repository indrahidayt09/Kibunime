import {
  LiaCaretSquareRightSolid,
  LiaCaretSquareLeftSolid,
} from "react-icons/lia";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all text-3xl text-color-secondary opacity-50 hover:opacity-100"
        >
          <LiaCaretSquareLeftSolid />
        </button>
      )}

      <p className="text-sm text-color-secondary">
        {page} - {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all text-3xl text-color-secondary opacity-50 hover:opacity-100"
        >
          <LiaCaretSquareRightSolid/>
        </button>
      )}
    </div>
  );
};

export default Pagination;
