/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksQuery
// ====================================================

export interface BooksQuery_books {
  __typename: "Book";
  title: string;
  author: string;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[];
}
