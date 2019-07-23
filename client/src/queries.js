import { gql } from "apollo-boost";

export const GET_BOOK_LIST = gql`
	query {
		books {
			id
			title
			description
			genres
			imageUrl
			author {
				name
			}
		}
	}
`;

export const GET_BOOK = gql`
	query($bookId: ID!) {
		book(id: $bookId) {
			id
			title
			description
			genres
			imageUrl
			author {
				name
			}
		}
	}
`;
