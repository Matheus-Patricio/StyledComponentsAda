import styled from "styled-components";

interface ContainerProps {
    cart: boolean
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.cart ? '0px' : '-350px')};


    width: 300px;
    background-color: white;
    height: 100Vh;
    padding: 2rem;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    transition: right 0.5s;

`

export const Title = styled.h1`

`