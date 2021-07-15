import React from 'react'
import styled from 'styled-components'

export const SearchTemplateDiv = styled.div`

    height: 85vh;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

`

const SearchTemplate = () => {

    return (
        <SearchTemplateDiv>
           <h1>Search Movies.....</h1>
        </SearchTemplateDiv>
    )
}

export default SearchTemplate
