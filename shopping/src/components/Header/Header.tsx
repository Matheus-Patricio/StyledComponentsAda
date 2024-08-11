import * as S from "./styles"
import { TbLogin2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootReducer }  from "../redux/root-reducer";




export const Header: React.FC = () => {
    const dispatch = useDispatch()
    //acessando o reducer (estado) específico com o reducer Raiz
    const obj  = useSelector((rootReducer: RootReducer) => rootReducer)
    console.log(obj)



    let isLogged = false
    const [cart, setHandleCart] = useState(false)

    function handleDispatch() {
        if (obj === null) {
            dispatch({
                type: 'user/login',

            })
        }
    }
    return(
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>
                    Myshop.
                </S.HeaderTitle>

                <S.ButtonWrapper>

                    <S.AuthButton isLogged={isLogged}  >
                        
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