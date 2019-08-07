import createStore from './cStore';

export const { Provider, Connect, Cosumer } = createStore({
    text: 'test context',
    num: 3,
});
