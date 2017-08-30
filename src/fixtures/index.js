// @flow
import type {Exercise, Record, EDate} from './../types/etypes.js';
import {DateFormat} from './../types/etypes.js';
import {Model} from './../model';
import {Map, List} from 'immutable';
import moment from 'moment';

export const Bench: Exercise = [
    "Bench", List([
        ["weight", "number"],
        ["reps", "number"],
        ["sets", "number"],
    ])
]

export const Climb: Exercise = [
    "Climb", List([
        ["level", "string"],
        ["times", "number"],
    ])
]

export const benchRecord: Record = [
    "Bench" , List([
        ["weight", 1000],
        ["reps", 10],
        ["sets", 5]
    ])
]

export const climbRecord: Record = [
    "Climb", List([
        ["level", "v3"],
        ["times", 4]
    ])
]

export const badClimbRecord: Record = [
    "Bench", List([
        ["level", "v3"],
        ["times", 4]
    ])
]

export const badClimbRecord2: Record = [
    "ChinUp", List([
        ["level", "v3"],
        ["times", 4]
    ])
]

const today : EDate = moment('2017-01-01').format(DateFormat);
export const model: Model = new Model(
    Map({ 'Bench': Bench, 'Climb': Climb }),
    Map({[today]: List([benchRecord, climbRecord])})
);