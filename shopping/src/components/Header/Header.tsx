import * as S from "./styles"
import { TbLogin2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";


export const Header: React.FC = () => {
    return(
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>
                    Myshop.
                </S.HeaderTitle>

                <S.ButtonWrapper>

                    <S.AuthButton>
                       Login
                       <TbLogin2 />
                    </S.AuthButton>

                    <S.CartButton>
                        Cart
                    <FiShoppingCart />    
                    </S.CartButton>
                    
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}