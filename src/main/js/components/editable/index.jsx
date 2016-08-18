import React from 'react';
import classnames from 'classnames';


export default ({editing, value, onEdit, className, ...props}) => {
    if (editing) {
        return <Edit className={className} value={value} onEdit={onEdit} {...props} />;
    }

    return <span className={classnames('value', className)} {...props}>{value}</span>;

}

class Edit extends React.Component {
    render() {
        //if the onEdit is missing an javascript error is thrown because of stricter prop handling in React 15
        const {className, value, onEdit, ...props} = this.props;

        return <input
            type="text"
            className={classnames('edit', className)}
            autoFocus={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            //input field did not exit on enter normally so this is needed
            onKeyPress={this.checkEnter}
            {...props} />;
    }

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };
    finishEdit = (e) => {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}