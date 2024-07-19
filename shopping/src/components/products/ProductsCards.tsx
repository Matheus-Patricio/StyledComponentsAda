import * as S from "./cardsStyles"
import { FiShoppingCart } from "react-icons/fi";
import { useFetch } from "../apiHooks/useFetch";

type ObjectData = {
    id: number,
    image: string,
    title: string,
    price: number,
    rating: {
        rate: number,
        count: number
    }
}

export const ProductsCards: React.FC = () => {
    const { data: products } = useFetch<ObjectData[]>('https://fakestoreapi.com/products')
    console.log(products)
    return( 
        <>
        
            {products?.map(data => {
                return(
                    
                        
                            <S.Li key={data.id}>
                                <S.Card>
                                    <S.ProductImage src={data.image}></S.ProductImage>
                            
                                    <S.ProductTitle>{data.title}</S.ProductTitle>

                                    <S.ReviewContainer>
                                        <S.Review>{data.rating.rate}</S.Review> 
                                        <S.Price>{data.price}</S.Price>
                                    </S.ReviewContainer>
                                
                                    <S.AddtoCartButton>Add to Cart<FiShoppingCart/></S.AddtoCartButton>
                                </S.Card>
                            </S.Li>
                        
                )
            })}
        </>
    )
}