import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as React from "react";
import { BooksQuery } from "../__generated__/BooksQuery";

const booksQuery = gql`
  query BooksQuery {
    books {
      title
      author
    }
  }
`;

const BookList = () => {
  return (
    <Query<BooksQuery> query={booksQuery}>
      {({ loading, error, data }) => {
        if (error) return <div>{JSON.stringify(error)}</div>;
        if (loading) return <div>Loading</div>;
        if (data) {
          return (
            <section>
              <ul>
                {data.books.map(
                  (book, index) =>
                    book && (
                      <li key={index}>
                        <span>{index + 1}.</span>
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                      </li>
                    )
                )}
              </ul>
            </section>
          );
        }
      }}
    </Query>
  );
};

export default BookList;
