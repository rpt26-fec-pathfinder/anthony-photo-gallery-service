import styled from 'styled-components';


export const Title = styled.h1`
  position: absolute;
  font-size: 26px;
  color: white;
  text-decoration: none;
`
export const ThumbImg = styled.img`
  padding: 1px;
`

export const Wrapper = styled.div`
  margin-left: 175px;
  font-family: Noto Sans, sans-serif;
`

export const Main = styled.div`
 margin-top: -40px;

 &:hover {
    cursor: pointer;
  }
`

export const Container = styled.div`
  margin-top: -20px;
`

export const Row = styled.div`
 display: inline;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  cursor: pointer;
  max-width: 610px; // 589 before?!??!

  &:hover {
    cursor: pointer;
  }
`

export const Col = styled.div`
  float: left;
  width: 120px;
  padding: 2px;
  margin-bottom: 5px;
`