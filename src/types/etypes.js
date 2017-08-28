// @flow
export type FieldName = string;
export type FieldType = 'string'|'number';
export type FieldValue = string | number; 
export type ExerciseName = string;
export type Schema = Array<[FieldName, FieldType]>;
export type Exercise = [ExerciseName, Schema];
export type RecordData = Array<[FieldName, FieldValue]>;
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

function hasSameSchema(record, exercise): boolean {
    const [rExerciseName: ExerciseName, recordData: RecordData] = record;
    const [eExerciseName: ExerciseName, schema: Schema] = exercise;
    if (rExerciseName !== eExerciseName) {
        return false;
    }
    if (recordData.length !== schema.length) {
        return false;
    }
    for (let i = 0; i < recordData.length; i++) {
        const [recordDataFieldName, fieldValue] = recordData[i];
        const [schemaFieldName, fieldType] = schema[i];
        if (recordDataFieldName !== schemaFieldName || !isFieldType(fieldValue, fieldType)) {
                return false;
            }
    }
    return true;
}

function isFieldType(fieldValue: FieldValue, fieldType: FieldType) {
    return typeof fieldValue === fieldType;
}
