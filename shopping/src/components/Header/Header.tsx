import * as S from "./styles"
import { TbLogin2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer }  from "../redux/root-reducer";


export const Header: React.FC = () => {
    //acessando o reducer (estado) específico com o reducer Raiz
    const { user }  = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const [cart, setHandleCart] = useState(false)

    const isLogged = user !== null
    
    const dispatch = useDispatch()
    function handleDispatch() {
        if (user === null) {
            dispatch({
                type: 'user/login',
                payload: {
                    name: "Math Logged",
                    email: "contato@email.com"
                }
            })
        } else {
            dispatch({
                type: 'user/logout',
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

                    <S.AuthButton isLogged={isLogged} onClick={handleDispatch}>
                        
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