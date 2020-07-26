import React, { useState } from "react";
import useFetchApi from "./useFetchApi";
import BookListing from "./BookListing";
import CategorySelection from "./CategorySelection";

function App() {
  const [category, setCategory] = useState(0);
  const { books, loading, error } = useFetchApi(category);

  return (
    <div className="text-gray-900 container mx-auto">
      <h1 className="text-center mx-auto font-serif text-5xl my-12 mx-8 lg:ml-20 xl:mr-16 xl:ml-0">
        The New York Times Best Sellers
      </h1>

      <div className="block lg:flex">
        <div className="flex-none mr-6 lg:w-1/5">
          <CategorySelection category={category} setCategory={setCategory} />
        </div>

        <div className="flex-auto overflow-hidden shadow-xl rounded-md bg-white p-8">
          {loading && (
            <h1 className="text-gray-500 font-serif text-xl text-center mx-auto">
              Loading...
            </h1>
          )}
          {error && (
            <h1 className="text-gray-500 font-serif text-xl">
              Error finding the books. Please try again..
            </h1>
          )}
          <div className="divide-y divide-gray-200 ml-8">
            {books.map((book) => {
              return (
                <BookListing
                  key={book.isbns[0].isbn13}
                  book={book.book_details[0]}
                ></BookListing>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto text-center m-20">
        Made by Julian Meser. Copyright (c) 2020 The New York Times Company. All
        Rights Reserved.
      </div>
    </div>
  );
}
export default App;
