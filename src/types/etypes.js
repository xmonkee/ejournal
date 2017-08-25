// @flow
export type FieldName = string;
export type FieldType = 'string'|'number';
export type FieldValue = string | number; 
export type ExerciseName = string;
export type Schema = Array<[FieldName, FieldType]>;
export type Exercise = [ExerciseName, Schema];
export type RecordData = Array<[FieldName, FieldValue]>;
export type Record = [ExerciseName, RecordData];


export function checkSchema(recordData: RecordData, exercise: Exercise): [boolean, ?string] {
    const [exerciseName: ExerciseName, schema: Schema] = exercise;
    if (hasSameSchema(recordData, schema)) {
        return [true, null];
    }
    return [false,
        `Schema mismatch
RecordData: ${JSON.stringify(recordData)}
Exercise: ${JSON.stringify(schema)}`
    ];
}

function hasSameSchema(recordData, schema): boolean {
    if (recordData.length !== schema.length) {
        return false;
    }
    for (let i = 0; i < recordData.length; i++) {
        const [recordDataFieldName, fieldValue] = recordData[i];
        const [schemaFieldName, fieldType] = schema[i];
        if (recordDataFieldName !== schemaFieldName ||
            typeof fieldValue !== fieldType) {
                return false;
            }
    }
    return true;
}