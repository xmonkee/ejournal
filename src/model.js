// @flow

import type Moment from 'moment';
import type {
    ExerciseName,
    Exercise, 
    Record
} from './types/etypes';

import { Bench, Climb } from './fixtures/exercises';
import { benchRecord } from './fixtures/exercises';

type Model = {
    exercises: {
        [ExerciseName]: Exercise
    },
    records: {
        [Moment]: Array<Record>
    }
}

const model: Model = {
    exercises: {
        'Bench': Bench,
        'Climb': Climb
    },
    records: {
        moment(): [
            benchRecord
        ]
    }
}