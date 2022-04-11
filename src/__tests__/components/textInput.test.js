import TextInput from "../../common-blocks/__text-input/TextInput";
import {fireEvent, render, screen} from "@testing-library/react";
import {createStore} from "redux";
import {rootReducer} from "../../redux/reducers/rootReducer";
import {Provider} from "react-redux";
import '@testing-library/jest-dom'
import Chips from "../../common-blocks/__chips/__chips";

const store = createStore(rootReducer)
const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>

const customRender = (ui, options) => {
    render(ui, {wrapper: Wrapper, ...options})
}

beforeEach(()=>{
    customRender(<TextInput />)

})

describe('TextInput should be rendered with events', () => {
    it('should be rendered element after click button with fixed placeholder', () => {
        customRender(<Chips />)
        fireEvent.click(screen.getByRole('button', {name: /Впечатления/i}))
        expect(screen.getByPlaceholderText('Поиск по стране, региону, городу, названию впечатления')).toBeInTheDocument()
    });

    it('should be render element after change active button', () => {
        customRender(<Chips />)
        fireEvent.click(screen.getByRole('button', {name: /Впечатления/i}))
        fireEvent.click(screen.getByRole('button', {name: /Маршруты/i}))
        expect(screen.getByPlaceholderText('Поиск по стране, региону, городу, названию маршрута')).toBeInTheDocument()
        expect(screen.queryByPlaceholderText('Поиск по стране, региону, городу, названию впечатления')).not.toBeInTheDocument()

    });
});