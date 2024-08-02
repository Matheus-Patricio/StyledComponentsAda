import * as S from "./styles"
import { TbLogin2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/root-reducer";


export const Header: React.FC = () => {

    //acessando o reducer (estado) específico com o reducer Raiz
    const object = useSelector((rootReducer: typeof RootReducer) => rootReducer)
    console.log(object)

    const [ isLogged , handleIsLogged ] = useState(true)
    const [cart, setHandleCart] = useState(false)

    return(
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>
                    Myshop.
                </S.HeaderTitle>

                <S.ButtonWrapper>

                    <S.AuthButton isLogged={isLogged} onClick={() => handleIsLogged(!isLogged)} >
                        
                       {isLogged ? "Logout" : "Login"}
                       {isLogged ? <TbLogout2/> : <TbLogin2/>}
                       
                    </S.AuthButton>

                    <S.CartButton onClick={() => setHandleCart(!cart)}>
                        Cart
                    <FiShoppingCart />    
                    </S.CartButton>
                    
                </S.ButtonWrapper>
            </S.Wrapper>
            <Cart cart={cart}/>
        </S.StyledHeader>
    )
}