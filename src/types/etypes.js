// @flow
import {List} from 'immutable';
export type FieldName = string;
export type FieldType = 'string'|'number';
export type FieldValue = string | number; 
export type ExerciseName = string;
export type Schema = List<[FieldName, FieldType]>;
export type Exercise = [ExerciseName, Schema];
export type RecordData = List<[FieldName, FieldValue]>;
export type Record = [ExerciseName, RecordData];
export type Response = {status: "success"} | {status: "failure", message: string};
export type EDate = string;

export const DateFormat = 'YYYYMMDD';

export function checkSchema(record: Record, exercise: Exercise): Response {
    if (hasSameSchema(record, exercise)) {
        return {status: "success"};
    }
    return {status: "failure",
        message: `Schema mismatch
Record: ${JSON.stringify(record)}
Exercise: ${JSON.stringify(exercise)}`
    };
}

export function hasSameSchema(record: Record, exercise: Exercise): boolean {
    const [rExerciseName: ExerciseName, recordData: RecordData] = record;
    const [eExerciseName: ExerciseName, schema: Schema] = exercise;
    return (
        hasSameExerciseName(rExerciseName, eExerciseName) &&
        hasSameNumberOfFields(recordData, schema) &&
        hasSameFieldTypes(recordData, schema)
    );
}

function hasSameExerciseName(rExerciseName, eExerciseName) {
    return rExerciseName === eExerciseName;
}

function hasSameNumberOfFields(recordData, schema) {
    return recordData.size === schema.size;
}

function hasSameFieldTypes(recordData, schema) {
    for (let i = 0; i < recordData.size; i++) {
        const [recordDataFieldName, fieldValue] = recordData.get(i);
        const [schemaFieldName, fieldType] = schema.get(i);
        if (recordDataFieldName !== schemaFieldName || !isFieldType(fieldValue, fieldType)) {
                return false;
            }
    }
    return true;
}

function isFieldType(fieldValue: FieldValue, fieldType: FieldType) {
    return typeof fieldValue === fieldType;
}
