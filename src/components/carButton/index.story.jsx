import React from 'react';
import { storiesOf } from '@storybook/react';
import CarButton from './index';
console.log(CarButton.__docgenInfo);


const buttons = [
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
];
storiesOf('button', module)
    .add(
        'default', () => (
            <CarButton
                num={1}
            />
        ),
    );
