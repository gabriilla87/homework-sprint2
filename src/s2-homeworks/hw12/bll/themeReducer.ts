const initState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeReducerType = initState, action: ThemeReducerATs): ThemeReducerType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const// fix any

export type ThemeReducerATs = ReturnType<typeof changeThemeId>
export type ThemeReducerType = typeof initState