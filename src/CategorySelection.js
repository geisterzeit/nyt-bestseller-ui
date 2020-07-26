import React from "react";

export default function BookListing({ category, setCategory }) {
  const STYLE_UNSELECTED =
    "text-xl text-center py-2 px-4 mb-2 border border-gray-100 rounded hover:bg-gray-300 transition duration-200";
  const STYLE_SELECTED =
    "text-xl text-center py-2 px-4 mb-2 border border-gray-500 rounded bg-gray-500 hover:bg-gray-700 text-white transition duration-200";

  return (
    <ul className="flex flex-wrap justify-center relative lg:block lg:fixed">
      <li
        onClick={() => setCategory(0)}
        className={category === 0 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Fiction
      </li>
      <li
        onClick={() => setCategory(1)}
        className={category === 1 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Nonfiction
      </li>
      <li
        onClick={() => setCategory(2)}
        className={category === 2 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Advice and How-To
      </li>
      <li
        onClick={() => setCategory(3)}
        className={category === 3 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Graphic Books
      </li>
      <li
        onClick={() => setCategory(4)}
        className={category === 4 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Young Adult
      </li>
      <li
        onClick={() => setCategory(5)}
        className={category === 5 ? STYLE_SELECTED : STYLE_UNSELECTED}
      >
        Children
      </li>
    </ul>
  );
}
