// @flow
import type {Exercise, Record, EDate} from './../types/etypes.js';
import {DateFormat} from './../types/etypes.js';
import {Model} from './../model';
import moment from 'moment';

export const Bench: Exercise = [
    "Bench", [
        ["weight", "number"],
        ["reps", "number"],
        ["sets", "number"],
    ]
]

export const Climb: Exercise = [
    "Climb", [
        ["level", "string"],
        ["times", "number"],
    ]
]

export const benchRecord: Record = [
    "Bench" , [
        ["weight", 1000],
        ["reps", 10],
        ["sets", 5]
    ]
]

export const climbRecord: Record = [
    "Climb", [
        ["level", "v3"],
        ["times", 4]
    ]
]

export const badClimbRecord: Record = [
    "Bench", [
        ["level", "v3"],
        ["times", 4]
    ]
]

export const badClimbRecord2: Record = [
    "ChinUp", [
        ["level", "v3"],
        ["times", 4]
    ]
]

const today : EDate = moment('2017-01-01').format(DateFormat);
export const model: Model = new Model(
    // Todo: changed to database access
    { 'Bench': Bench, 'Climb': Climb },
    {[today]: [benchRecord, climbRecord]}
)