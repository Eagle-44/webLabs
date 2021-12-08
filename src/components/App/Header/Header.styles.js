import styled from 'styled-components';

export const LinkingWrapper = styled.div`

#header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 5px;
    border-bottom: solid 5px;
    border-color: grey;
}

.selected {
    :after {
      justify-content: center;
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      border-radius: 4px;
      border-right: 40px solid grey;
    }
  }
  
  ul {
    display: flex;
  }
  li {
    display: flex;
    position: relative;
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
    a {
      text-decoration: none;
      color: black;
      font-family: Helvetica;
    }
  }

`
export const Image = styled.div`
    img {
        width: 40px;
        height: 40px;
        margin-left: 5px;
    }
`
