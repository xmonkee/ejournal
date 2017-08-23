// @flow
export type FieldName = string;
export type FieldType = 'string'|'number';
export type FieldValue = string | number; 
export type ExerciseName = string;
export type Schema = Array<[FieldName, FieldType]>;
export type Exercise = [ExerciseName, Schema];
export type Record = Array<[FieldName, FieldValue]>;


export function checkSchema(record: Record, exercise: Exercise): [boolean, ?string] {
    const [exerciseName: ExerciseName, schema: Schema] = exercise;
    if (hasSameSchema(record, schema)) {
        return [true, null];
    }
    return [false,
        `Schema mismatch
Record: ${JSON.stringify(record)}
Exercise: ${JSON.stringify(schema)}`
    ];
}

function hasSameSchema(record, schema): boolean {
    if (record.length !== schema.length) {
        return false;
    }
    for (let i = 0; i < record.length; i++) {
        const [recordFieldName, fieldValue] = record[i];
        const [schemaFieldName, fieldType] = schema[i];
        if (recordFieldName !== schemaFieldName ||
            typeof fieldValue !== fieldType) {
                return false;
            }
    }
    return true;
}