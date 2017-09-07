// @flow

import type {
    ExerciseName, Exercise, Record, EDate
} from './types/etypes';
import {List, Map} from 'immutable';
import { hasSameSchema } from './types/etypes';

export type Exercises = Map<ExerciseName, Exercise>;
export type Records = Map<EDate, List<Record>>;

export class ModelError extends Error{}

export class Model {
    exercises: Exercises
    records: Records

    constructor(exercises: Exercises, records: Records) {
        this.exercises = exercises;
        this.records = records
    }

    withRecord(date: EDate, idx: number, record: Record): Model {
        this.validateRecord(record);
        const recordsForDate = this.records.get(date) || List();
        if (idx > recordsForDate.size - 1) {
            throw new ModelError(`Record #${idx+1} not found for ${date}`)
        }
        const newRecordsForDate = recordsForDate.set(idx, record);
        return this.withRecordsForDate(date, newRecordsForDate);
    }

    withRecordsForDate(date: EDate, recordsForDate: List<Record>) : Model {
        const newRecords = this.records.set(date, recordsForDate);
        return this.withRecords(newRecords);
    }

    withRecords(records: Records) : Model {
        return new Model(this.exercises, records);
    }

    addRecord(date: EDate, record: Record): Model {
        this.validateRecord(record);
        const recordsForDate = this.records.get(date) || List();
        const newRecordsForDate = recordsForDate.push(record);
        return this.withRecordsForDate(date, newRecordsForDate);
    }

    validateRecord(record: Record): void {
        const [exerciseName: ExerciseName] = record;
        const exercise = this.exercises.get(exerciseName);
        if (!exercise) {
            throw new ModelError(`Exercise ${exerciseName} not found`);
        }
        if (!hasSameSchema(record, exercise)) {
            throw new ModelError(`Bad Schema`);
        }
    }
}