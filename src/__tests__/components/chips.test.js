import {screen, render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "../../redux/reducers/rootReducer";
import Chips from "../../common-blocks/__chips/__chips";
import '@testing-library/jest-dom'

const store = createStore(rootReducer)
const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>

const customRender = (ui, options) => {
    render(ui, {wrapper: Wrapper, ...options})
}

beforeEach(()=>{
    customRender(<Chips />)
})

describe('test Chips Element without Events', () => {

    it('should be render list', () => {
        expect(screen.getByRole('list')).toBeInTheDocument()
    });

    it('should be render button', () => {
        expect(screen.getByText(/Breezzor Pass/i)).toBeInTheDocument()
        expect(screen.getByText(/Пляжи/i)).toBeInTheDocument()
        expect(screen.getByText(/Впечатления/i)).toBeInTheDocument()
        expect(screen.getByText(/Маршруты/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /Маршруты/i})).toBeInTheDocument()
    });
});

describe('test Chips Element with Events', () => {
    it('should be selected button (first element chips state)', () => {
        fireEvent.click(screen.getByRole('button', {name: /Пляжи/i}))
        const stat = store.getState()
        expect(stat.chips.chips[0].isActive).toBeTruthy()
    });

    it('should be change of active seconcomponent', () => {
        fireEvent.click(screen.getByRole('button', {name: /Пляжи/i}))
        let stat = store.getState()
        expect(stat.chips.chips[0].isActive).toBeTruthy()
        fireEvent.click(screen.getByRole('button', {name: /Breezzor Pass/i}))
        let changedStat = store.getState()
        expect(changedStat.chips.chips[0].isActive).toBeFalsy()
        expect(changedStat.chips.chips[1].isActive).toBeTruthy()
    });
});