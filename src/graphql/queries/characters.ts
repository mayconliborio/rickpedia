import {gql} from "graphql-request";


export const GET_CHARACTERS_CARD_DATA = gql`
    query GetCharacters($page: Int!, $nameFilter: String) {
        characters(page: $page, filter: { name: $nameFilter}) {
            info {
                count
                pages
                next
            }
            results {
                id
                name
                species
                image
            }
        }
    }
`;

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!, $nameFilter: String) {
        characters(page: $page, filter: { name: $nameFilter}) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                origin {
                    name
                    type
                    dimension
                }
                location {
                    name
                    type
                    dimension
                }
                image
            }
        }
    }
`;