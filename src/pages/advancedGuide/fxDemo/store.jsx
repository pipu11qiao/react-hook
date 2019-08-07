import createStore from './createStore.jsx';

export const { Provider, Connect, Cosumer } = createStore({
    text: 'test context',
    num: 3,
});
