import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./cardsStyles"
import { FiShoppingCart } from "react-icons/fi";



export const ProductsCards: React.FC = () => {
const [data, setData] = useState([])


useEffect(() => {
  fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data => {
    setData(data)
    console.log(data)
   })
}, [])




    return(
        <S.Card>
            <S.ProductImage/>
            <S.ProductTitle></S.ProductTitle>

            <S.ReviewContainer>
                <S.Review>4</S.Review>
                <S.Price>R$10</S.Price>

            </S.ReviewContainer>

            <S.AddtoCartButton>Add to Cart<FiShoppingCart/></S.AddtoCartButton>
        </S.Card>
    )
}