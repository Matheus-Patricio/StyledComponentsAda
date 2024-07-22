import styled from "styled-components"


export const Card = styled.article`
    padding: 2rem;
    height: 100%;
    box-shadow:  0 0 5px rgba(0, 0, 0, 0.30);   
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductImage =  styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;
`
export const ProductTitle = styled.h2`
    font-size: 20px;
    margin-top: 1rem;
`
export const ReviewContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;

`   
export const Review = styled.span`

`

export const Price =  styled.strong`
    font-size:18px;
`
export const AddtoCartButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 5px;
    font-size: 20px;
    background-color:#001774;
    color: white;
    width: 100%;
    justify-content: center;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;

    &:hover{
        background-color: #5C00D0;
        transition: all 0.3s;
    }
`

export const Li = styled.li`
    list-style: none;
`

export const AddtoCartButtonWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    align-items: center;
`