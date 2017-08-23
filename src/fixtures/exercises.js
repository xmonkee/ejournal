// @flow
import type {Exercise, Record} from './../types/etypes.js';

export const Bench: Exercise = [
    "Bench Press", [
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
    ["weight", 1000],
    ["reps", 10],
    ["sets", 5]
]