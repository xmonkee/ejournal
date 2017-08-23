// @flow

import React, {Component} from 'react';
import type {
    Exercise,
    FieldName,
    FieldType
} from './../types/etypes';

type Props = {
    exercise: Exercise,
}

export default function ExerciseInput(props: Props) {
    const [exerciseName, schema] = props.exercise;
    return (
        <div>
        schema.map(([fieldName, fieldType] : [FieldName, FieldType], idx) => {<div>{renderField(fieldName, fieldType)}</div>})
        </div>
    );
}

function renderField(fieldName: FieldName, fieldType: FieldType) {
    switch (fieldType) {
        case 'string':
           return renderString(fieldName);
            break;
        case 'number':
            return renderNumber(fieldName);
            break;
        default:
            return renderInvalid(fieldName);
    }
}