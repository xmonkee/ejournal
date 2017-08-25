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

export default function ExerciseInput({exercise}: Props) {
    const [exerciseName, schema] = exercise;
    return (
        <div>
            {schema.map(([fieldName, fieldType], idx) => renderField(fieldName, fieldType))}
        </div>
    );
}

function renderField(fieldName: FieldName, fieldType: FieldType) {
    switch (fieldType) {
        case 'string':
           return renderString(fieldName);
        case 'number':
            return renderNumber(fieldName);
        default:
            return renderInvalid(fieldName);
    }
}

function renderString(fieldName){
    return (
        <div>
            <div>String</div>
            <div>{fieldName}</div>
        </div>
    )
}

function renderNumber(fieldName){
    return (
        <div>
            <div>Number</div>
            <div>{fieldName}</div>
        </div>
    )
}

function renderInvalid(fieldName) {
    return (
        <div>INVALID</div>
    )
}