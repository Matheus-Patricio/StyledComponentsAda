import React from "react"
import * as S from './styles'
import { ProductsCards } from "../products/ProductsCards"

export const ProductsList: React.FC = () => {
    return(
        <>
            <S.Container>
                <ProductsCards/>
            </S.Container>
        </>
    )
}