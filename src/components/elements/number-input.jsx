// @flow
import React, { Component } from 'react';
import Input from './input';

type error = "error";
type className = string;
type Props = { onChange?: (number | null) => void};
type State = {[className] : boolean};

export default class NumberInput extends Component<Props, State>{
    props: Props;
    state: State;

    componentWillMount() {
        this.state = { error: false };
    }

    render() {
        const { onChange: _onChange, ...otherProps } = this.props;
        return (
            <Input
                classes={this.state}
                onChange={this.setErrorAndCallBack.bind(this)}
                {...otherProps}
            />
        )
    }

    setErrorAndCallBack(stringValue: string) {
        const parsedValue: number | null | error = parseString(stringValue);
        this.setState({error: parsedValue === 'error'})
        const {onChange} = this.props;
        if (onChange) {
            onChange(
                typeof parsedValue === 'number'? parsedValue : null
            );
        }
    }
}

function parseString(stringValue: string): number | null | error {
    if (stringValue === '') {
        return null;
    }
    const num = +stringValue;
    if (isNaN(num)) {
        return 'error';
    } else {
        return num;
    }
}