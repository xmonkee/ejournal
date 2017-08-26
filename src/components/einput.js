// @flow

import React from 'react';
import type { Exercise } from './../types/etypes';

type Props = {
    exercise: Exercise,
}

export default function ExerciseInput({exercise}: Props) {
    const [{}, schema] = exercise;
    return (
        <div>
            {
                schema.map(([fieldName, fieldType], idx) => (<RenderField key={idx} fieldName={fieldName} fieldType={fieldType} />))
            }
        </div>
    );
}

function RenderField({fieldName, fieldType}) {
    switch (fieldType) {
        case 'string':
            return <StringField fieldName={fieldName} />;
        case 'number':
            return <NumberField fieldName={fieldName} />;
        default:
            return <InvalidField fieldName={fieldName} />;
    }
}

function StringField({fieldName}){
    return (
        <div>
            <div>String</div>
            <div>{fieldName}</div>
        </div>
    )
}

function NumberField({fieldName}){
    return (
        <div>
            <div>Number</div>
            <div>{fieldName}</div>
        </div>
    )
}

function InvalidField({fieldName}) {
    return (
        <div>INVALID</div>
    )
}
