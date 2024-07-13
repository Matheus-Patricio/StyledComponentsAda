import styled from "styled-components";



export const StyledHeader = styled.header`
box-shadow: 1.5px 1.5px #d6d6d6;
`

export const HeaderTitle = styled.h1`
    font-family:system-ui;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
    padding: 0 2rem;
    margin: 0 auto;
    height: 70px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem; 
       
`
export const AuthButton = styled.button`
    border: none;
    border-radius: 18px;
    background-color:blue;
    padding: 5px;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 0.25rem;
`
export const CartButton = styled.button`
    border: none;
    border-radius: 18px;
    padding: 5px;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 0.25rem;

`