import * as S from "./cardsStyles"
import { FiShoppingCart } from "react-icons/fi";

export const ProductsCards: React.FC = () => {
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

async function getData() {
    try{
        const response = fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))


        
        console.log(response)
/*
        const dataObject = {
            image:data.image,
            title: data.title,
            price:data.price,
            rating:data.rating
        }
*/
    }
    catch(err) {
        console.log('error:', err)
    }
}

getData()