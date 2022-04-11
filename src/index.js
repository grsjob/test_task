import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";

const root = createRoot(document.getElementById('root'));

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true
    })
)

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);