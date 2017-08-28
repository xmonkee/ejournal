import {model} from './fixtures/';
import * as exercises from './fixtures/';

it('validates record', () => {
    const response = model.validateRecord(exercises.benchRecord);
    expect(response.status).toBe("success");
});

it('validates record', () => {
    const response = model.validateRecord(exercises.climbRecord);
    expect(response.status).toBe("success"); 
});

it('fails validation for bad schema', () => {
    const response = model.validateRecord(exercises.badClimbRecord); 
    expect(response.status).toBe("failure"); 
    expect(response.message).toContain("Schema mismatch");
});

it('fails validation for missing exercise', () => {
    const response = model.validateRecord(exercises.badClimbRecord2); 
    expect(response.status).toBe("failure"); 
    expect(response.message).toContain("not found");
});

it('updates record', () => {
    // Pre update model check
    const date = '20170101';
    const originalRecord = model.records[date][0];
    expect(originalRecord[0]).toBe('Bench');

    const response = model.updateRecord(
        '20170101', 0,
        ['Climb', [['level', 'v10'], ['times', 100]]]
    );
    const newRecord = model.records[date][0];

    // Post update model check
    expect(response.status).toBe("success"); 
    expect(newRecord[0]).toBe('Climb');
});

it('fails update for invalid idx', () => {
    const response = model.updateRecord(
        '20170101', 
        model.records['20170101'].length,
        exercises.climbRecord
    );
    expect(response.status).toBe("failure"); 
    expect(response.message).toContain('not found for')
});
 
it('inserts record', () => {
    const date = '20170101';
    const originalRecordsForDate = model.records[date];
    const originalNumberOfRecords = originalRecordsForDate.length;

    const response = model.insertValidRecord(date, exercises.climbRecord);
    expect(response.status).toBe('success');

    const newRecordsForDate = model.records[date];
    const newNumberOfRecords = newRecordsForDate.length;
    expect(newNumberOfRecords).toBe(originalNumberOfRecords + 1);
    expect(newRecordsForDate[newRecordsForDate.length-1]).toBe(exercises.climbRecord);
});