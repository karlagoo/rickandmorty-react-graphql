import {gql} from '@apollo/client'

export const ALL_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
            }
        }
    }
`