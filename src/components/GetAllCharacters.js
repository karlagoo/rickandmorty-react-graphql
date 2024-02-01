import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ALL_CHARACTERS } from '../utils/queries';

function GetAllCharacters() {

  const {loading, data} = useQuery(ALL_CHARACTERS);

  useEffect(()=>{
    console.log(data)
  },[data]);

  return (
    <div>
        
    </div>
  )
}

export default GetAllCharacters