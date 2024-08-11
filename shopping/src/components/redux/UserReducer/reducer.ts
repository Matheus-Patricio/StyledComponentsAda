//Reducer: Guarda o estado que desejamos compartilhar na aplicação e manipula/altera o estado.

interface User {
    name: string
    email: string

}

interface UserState {
    user: User | null
}

interface UserAction {
    type: string
    payload?: User
}

const initialState: UserState = {
    user: {
        name: 'Math',
        email: 'contato@email.com'
    }
}


//Todo reducer precisar retornar o nosso estado atualizado


// export function userReducer(state=initialState, action:userAction): UserState { 
//     if (action.type === 'user/login' ) {
//         return {
//             user: {
//                 name: "Matheus Patricio",
//                 email: "matheus@email.com"
//             }
//         }        
//     }
//     return state
// }


// Todo reducer precisa retornar o nosso estado atualizado  
export function userReducer(state = initialState, action:UserAction): UserState {

     if(action.type === 'user/login') {
        return {
            ...state,
            user: action.payload as User,

        }
    } else if (action.type === 'user/logout') {
        return {
            ...state, 
            user: null
        }
    }
    return state
}

