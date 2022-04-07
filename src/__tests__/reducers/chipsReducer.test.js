import {chipsReducer} from '../../redux/reducers/chipsReducer'
import {deleteChip, postChip, toggleActive} from "../../redux/actions/chipsActions";
let initialState = {
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



describe('tests chipsReducer', () => {

    it('should be add chip', () => {
       let newState = chipsReducer(initialState, postChip({
            id: 4,
            name: 'route',
            isActive: false,
            value: 'Маршруты',
            placeHolder: ' названию маршрута'
        }))
        expect(newState.chips.length).toBe(5)
    });

    it('should be delete chip', () => {
        let afterDeleteState = chipsReducer(initialState, deleteChip('beach'))
        expect(afterDeleteState.chips.length).toBe(3)
        expect(afterDeleteState.chips).not.toContain('beach')
    });

    it('should be toggle active', () => {
        let toggleChip = chipsReducer(initialState, toggleActive("beach") )
        expect(toggleChip.chips[0]).toHaveProperty("isActive", true)

        let toggleOtherChip = chipsReducer(toggleChip, toggleActive("hotel"))
        expect(toggleOtherChip.chips[1]).toHaveProperty("isActive", true)
    });
});