// @flow
import type {Model} from './../model';
import React from 'react';
import logo from './../logo.svg';
import ExerciseInput from './einput';
import { Bench } from './../fixtures/exercises';

type Props = {model: Model}

export default function App(props: Props) {
    return (
        <div>
            <ExerciseInput exercise={Bench} />
        </div>
    );
}