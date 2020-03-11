import React from 'react';
import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    render() {

        const {done, important, label, onDeleted, onToggleImportant, onToggleDone } = this.props;
        

        let ClassNames = 'todo-list-item';

        if(done) {
            ClassNames += ' done';
        }

        if(important) {
            ClassNames += ' important';
        }
       

        return (
            <span className={ClassNames}>
                <span
                    className='todo-list-item-label'
                     
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <button type="button"
                    onClick={onToggleImportant}
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    onClick={onDeleted}  
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
               
            </span>
        );
    }
};