// @flow

import {List} from 'immutable';
import {model} from './fixtures/';
import * as exercises from './fixtures/';

it('validates record', () => {
    model.validateRecord(exercises.benchRecord);
});

it('validates record', () => {
    model.validateRecord(exercises.climbRecord);
});

it('fails validation for bad schema', () => {
    expect(() => model.validateRecord(exercises.badClimbRecord)).toThrow();
});

it('fails validation for missing exercise', () => {
    expect(() => model.validateRecord(exercises.badClimbRecord2)).toThrow();
});

it('updates record', () => {
    // Pre update model check
    const date = '20170101';
    const originalRecord = model.records.get(date).get(0);
    expect(originalRecord[0]).toBe('Bench');

    const newModel = model.withRecord(
        date, 0,
        ['Climb', List([['level', 'v10'], ['times', 100]])]
    );
    const newRecord = newModel.records.get(date).get(0);

    // Post update model check
    expect(newRecord[0]).toBe('Climb');
});

it('fails update for invalid idx', () => {
    expect(() => model.withRecord(
        '20170101', 
        model.records.get('20170101').size,
        exercises.climbRecord
    )).toThrow();
});
 
it('inserts record', () => {
    const date = '20170101';
    const originalRecordsForDate = model.records.get(date);
    const originalNumberOfRecords = originalRecordsForDate.size;

    const newModel = model.addRecord(date, exercises.climbRecord);

    const newRecordsForDate = newModel.records.get(date);
    const newNumberOfRecords = newRecordsForDate.size;
    expect(newNumberOfRecords).toBe(originalNumberOfRecords + 1);
    expect(newRecordsForDate.get(newRecordsForDate.size-1)).toBe(exercises.climbRecord);
});