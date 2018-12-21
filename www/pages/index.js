import { Query } from "react-apollo";
import gql from "graphql-tag";

export const booksQuery = gql`
  query allBooks {
    books {
      title
      author
    }
  }
`;

export default function BooksList() {
  return (
    <Query query={booksQuery}>
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
