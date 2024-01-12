import React from 'react';
import { useQuery, gql } from "@apollo/client";
import "./CharactersList.css";

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export default function CharactersList() {

    const { error, data, loading } = useQuery(GET_CHARACTERS);
    //console.log({ error, loading, data });

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;


  return (
    <div className="CharacterList">
        {data.characters.results.map((character) => {
            return (
                <div>
                    <img src={character.image} />
                    <h2>{character.name}</h2>
                </div>
            )
        })}
    </div>
  )
}
