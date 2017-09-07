// @flow

import {List} from 'immutable';
import {checkSchema} from './etypes';
import {
    Bench,
    Climb,
    benchRecord,
    climbRecord
} from './../fixtures/'

test('passes valid type (bench)', () => {
    const response = checkSchema(benchRecord, Bench);
    expect(response.status).toBe("success");
});

test('passes valid type (climb)', () => {
    const response = checkSchema(climbRecord, Climb);
    expect(response.status).toBe("success");
});

test('fails missing type', () => {
    const record = ["Bench", List([["weight", 100], ["sets", 5]])];
    const response = checkSchema(record, Bench);
    expect(response.status).toBe("failure");
});

test('fails extra type', () => {
    const record = ["Bench", List([ ["weight", 100], ["sets", 5], ["reps", 10], ["intensity", 9000] ])];
    const response = checkSchema(record, Bench);
    expect(response.status).toBe("failure");
});

test('fails wrong type (number)', () => {
    const record = ["Bench", List([["weight", 100], ["sets", 5], ["reps", '10']])];
    const response = checkSchema(record, Bench);
    expect(response.status).toBe("failure");
});

test('fails wrong type (string)', () => {
    const record = ["Climb", List( [["level", 2], ["times", 5]] )];
    const response = checkSchema(record, Climb);
    expect(response.status).toBe("failure");
});
