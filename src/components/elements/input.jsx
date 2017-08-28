// @flow
import React, {Component} from 'react';
import uuid from 'uuid';
import classNames from 'classnames';

export type Props = {
    label?: string,
    id?: string,
    onChange?: (string) => void,
    classes?: {[string]: boolean}
}

export default class Input extends Component<Props, null> {
    props: Props;
    idName: string;

    componentWillMount() {
        this.idName = this.props.id ? this.props.id : uuid.v4();
    }

    render(){
    const {label, onChange, classes, ...otherProps} = this.props;
        const callback = onChange;
        return (
            <div>
                {label ? <label htmlFor={this.idName}>{label.toUpperCase()}</label> : <div></div>}
                <input
                    type='text'
                    id={this.idName}
                    onChange={e => callback ? callback(e.target.value) : undefined}
                    className={classNames(classes)}
                    {...otherProps}
                />
            </div>
        );
    }
}