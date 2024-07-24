import React from "react";
import * as S from './styles'

interface CartProps {
    cart: boolean
}

export const Cart: React.FC<CartProps> = ({ cart }) => {


    return( 
    <S.Container cart={cart}>
        <S.Title>
            Carrinho
        </S.Title>

    </S.Container>
    )
}