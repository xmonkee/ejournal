// @flow

import type {
    ExerciseName, Exercise, Record, Response, EDate
} from './types/etypes';
import { checkSchema } from './types/etypes';

export class Model {
    exercises: {[ExerciseName]: Exercise}
    records: {[EDate]: Array<Record>}

    constructor(exercises: {[ExerciseName]: Exercise}, records: {[EDate]: Array<Record>}) {
        this.exercises = exercises;
        this.records = records
    }

    updateRecord(date: EDate, idx: number, record: Record): Response {
        const response = this.validateRecord(record);
        if (response.status === 'failure') {
            return response;
        } 
        return this.updateValidRecord(date, idx, record);
    }

    updateValidRecord(date: EDate, idx: number, record: Record): Response {
        const recordsForDate = this.records[date] || [];
        if (idx > recordsForDate.length - 1) {
            return {
                status: "failure",
                message: `Record #${idx+1} not found for ${date}`
            };
        }
        recordsForDate[idx] = record;
        return {status: "success"};
    }

    inserRecord(date: EDate, record: Record): Response {
        const response = this.validateRecord(record);
        if (response.status === 'failure') {
            return response;
        } 
        return this.insertValidRecord(date, record);
    }

    insertValidRecord(date: EDate,record: Record): Response {
        const recordsForDate = this.records[date] || [];
        recordsForDate.push(record);
        return {status: "success"};
    }

    validateRecord(record: Record): Response {
        const [exerciseName: ExerciseName] = record;
        const exercise = this.exercises[exerciseName];
        if (!exercise) {
            return {status: "failure", message: `Exercise ${exerciseName} not found`};
        }
        return checkSchema(record, exercise);
    }
}