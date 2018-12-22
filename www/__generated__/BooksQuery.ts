/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksQuery
// ====================================================

export interface BooksQuery_books {
  __typename: "Book";
  title: string | null;
  author: string | null;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[] | null;
}
