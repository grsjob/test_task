import {TOGGLE_ACTIVE, POST_CHIP, DELETE_CHIP} from "../const/types";

const initialState = {
    chips: [
        {
            id: 1,
            name: 'beach',
            isActive: false,
            value: 'Пляжи',
            placeHolder: ' названию пляжа'
        },
        {
            id: 2,
            name: 'hotel',
            isActive: false,
            value: 'Breezzor Pass',
            placeHolder: ' названию отеля'

        },
        {
            id: 3,
            name: 'impression',
            isActive: false,
            value: 'Впечатления',
            placeHolder: ' названию впечатления'
        },
        {
            id: 4,
            name: 'route',
            isActive: false,
            value: 'Маршруты',
            placeHolder: ' названию маршрута'
        },
    ]
}

export const chipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CHIP:
            return {...state, chips: [...state.chips, action.payload]}
        case DELETE_CHIP:
            return {...state, chips: [...state.chips].filter(chip => chip.name !== action.payload)}
        case TOGGLE_ACTIVE:
            return {
                ...state,
                chips: state.chips.map(
                    chip => chip.name === action.payload
                        ? {
                            ...chip,
                            isActive: true
                        }
                        : {
                        ...chip,
                            isActive: false
                        }
                ),
            }
        default:
            return state

    }
}