//Reducer: Guarda o estado que desejamos compartilhar na aplicação e manipula/altera o estado.

interface User {
    name: string
    email: string

}

interface UserState {
    user: User | null
}

interface userAction {
    type: string
    payload?: User
}

const initialState: UserState = {
    user: null,

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

export function userReducer(state=initialState, action:userAction): UserState {
    return state
}