// @flow
import type {Model} from './../model';
import React from 'react';
import ExerciseInput from './einput';
import { Climb } from './../fixtures/';

type Props = {model: Model}

export default function App(_: Props) {
    return (
        <div>
            <ExerciseInput exercise={Climb} />
        </div>
    );
}