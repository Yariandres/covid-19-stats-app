import React from 'react';
import { InputGroup, Input } from 'reactstrap';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <InputGroup size="lg mt-5">
        <Input 
          placeholder={ placeholder } 
          onChange={ handleChange }
        />
      </InputGroup>
    </div>
  );
};

export default SearchBox;