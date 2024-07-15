import axios, { AxiosInstance } from "axios";
import { EffectCallback, useEffect, useState } from "react";
import * as S from "./cardsStyles"
import { FiShoppingCart } from "react-icons/fi";

type ObjectData = {
    id: number,
    image: string,
    title: string,
    price: number
}

export const ProductsCards: React.FC = () => {
const [data, setData] = useState<ObjectData[]>([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setData(response.data)
            console.log(data)
        }).catch((err) => {
            console.log("erro:", err)
        })
    }, [])

    
    return(
        <S.Card>
            {data.map(card => {
                return(
                    <li key={card.id}>
                        <img src={card.image}/>
                        <h2>{card.title}</h2>
                        <h4>{card.price}</h4>
                    </li>
                )
            })}
            <S.ProductImage/>
            <S.ProductTitle></S.ProductTitle>

            <S.ReviewContainer>
                <S.Review>4</S.Review>
                <S.Price></S.Price>

            </S.ReviewContainer>

            <S.AddtoCartButton>Add to Cart<FiShoppingCart/></S.AddtoCartButton>
        </S.Card>
    )
}