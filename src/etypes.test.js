import {Bench, Climb, checkSchema} from './etypes';

test('passes valid type (bench)', () => {
    const entry = {weight: 100, reps: 10, sets: 5};
    const [valid, error] = checkSchema(entry, Bench);
    expect(valid).toBe(true);
    expect(error).toBe(null);
});

test('passes valid type (climb)', () => {
    const entry = {level: "v2", times: 5}
    const [valid, error] = checkSchema(entry, Climb);
    expect(error).toBe(null);
    expect(valid).toBe(true);
});

test('fails missing type', () => {
    const entry = {weight: 100, sets: 5};
    const [valid, error] = checkSchema(entry, Bench);
    expect(valid).toBe(false);
});

test('fails extra type', () => {
    const entry = {weight: 100, sets: 5, reps: 10, intensity: 9000};
    const [valid, error] = checkSchema(entry, Bench);
    expect(valid).toBe(false);
});

test('fails wrong type (number)', () => {
    const entry = {weight: 100, sets: 5, reps: '10'};
    const [valid, error] = checkSchema(entry, Bench);
    expect(valid).toBe(false);
});

test('fails wrong type (string)', () => {
    const entry = {level: 2, times: 5}
    const [valid, error] = checkSchema(entry, Climb);
    expect(valid).toBe(false);
    console.log(error);
});
