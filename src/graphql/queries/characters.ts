import {gql} from "graphql-request";


export const GET_CHARACTERS_CARD_DATA = gql`
    query getCharacters($page: Int!, $nameFilter: String) {
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

export const GET_CHARACTER_DETAILS = gql`
    query getCharacter($id: ID!) {
        character(id: $id) {
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
            episode {
                id
                name
                episode
                air_date
            }
            location {
                name
                type
                dimension
            }
            image
        }
    }
`;
