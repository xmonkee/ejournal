// @flow
type VType = 'string'|'number';
type VName = string;
type ESchema = {[VName]: VType};
type EType = string;
export type Exercise = [EType, ESchema];


// Constants
const NUMBER = "number";
const STRING = "string";
const WEIGHT = "weight";
const REPS = "reps";
const SETS = "sets";

// Sample Exercises
export const Bench: Exercise = [
    "Bench Press", {
        [WEIGHT]: NUMBER,
        [REPS]: NUMBER,
        [SETS]: NUMBER
    }
]

export const Climb: Exercise = [
    "Climb", {
        "level": STRING,
        "times": NUMBER
    }
]

export function checkSchema(values: {VName: any}, exercise: Exercise): [boolean, ?string] {
    const [ename, eschema] = exercise;
    for (const vname in values) {
        if (!eschema[vname]) {
           return [false, "Illegal field: " + vname];
        }
        if (typeof values[vname] !== eschema[vname]) {
            return [false, `Wrong type: Field: ${vname}: Expected: ${eschema[vname]}, Got: ${typeof values[vname]}`]
        }
    }
    for (const vname in eschema) {
        if (!values[vname]) {
           return [false, "Missing field: " + vname];
        }
    }
    return [true, null];
}
