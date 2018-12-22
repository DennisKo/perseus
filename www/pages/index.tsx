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

export default class BookList extends React.Component<{}, {}> {
  render() {
    return (
      <Query<BooksQuery> query={booksQuery}>
        {({ loading, error, data: { books } }) => {
          if (error) return <div>{JSON.stringify(error)}</div>;
          if (loading) return <div>Loading</div>;

          return (
            <section>
              <ul>
                {books.map((book, index) => (
                  <li key={book.title}>
                    <span>{index + 1}. </span>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                  </li>
                ))}
              </ul>
            </section>
          );
        }}
      </Query>
    );
  }
}
