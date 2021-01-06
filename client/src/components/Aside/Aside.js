import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  visibility: hidden;
  width: 300px;
  padding: 20px 10px 10px 10px;

  aside {
    height: 250px;
    margin-bottom: 20px;
    border: solid 1px #000;
  }

  @media screen and (max-width: 812px) {
    display: none;
  }
`

function Aside() {
  return (
    <Wrapper>
      <aside>
        <h2>aside</h2>
      </aside>
      <aside>
        <h2>aside</h2>
      </aside>
    </Wrapper>
  )
}

export default Aside
