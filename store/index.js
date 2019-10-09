import React from 'react';
import { storiesOf, configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button } from '@storybook/react/demo';

addDecorator(withInfo({
    header: true, // Global configuration for the info addon across all of your stories.
}));

const req = require.context('../src/components', true, /\.story\.jsx$/);

function loadStories() {
    // require('./story_demo.jsx');
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('helloworld')}>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
