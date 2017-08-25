// @flow

import type Moment from 'moment';
import type {
    ExerciseName,
        Exercise,
        Record
} from './types/etypes';
import {moment} from 'moment';

import { Bench, Climb } from './fixtures/exercises';
import { benchRecord } from './fixtures/exercises';

export type Model = {
    exercises: {[ExerciseName]: Exercise},
    records: {[Moment]: Array<Record>}
}

const now : Moment = moment();

const model: Model = {
    exercises: { 'Bench': Bench, 'Climb': Climb },
    records: {now: [benchRecord]}
}

export default model;