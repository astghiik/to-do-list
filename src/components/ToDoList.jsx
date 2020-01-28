import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromList } from '../actions';

const styles = () => ({
    todoItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5px',
        '&:hover': {
            backgroundColor: "#F4F1F1",
            borderRadius: '5px'
          },
    },

    itemRow: {
        width: "500px",
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },

    itemText: {
        verticalAlign: 'super',
        marginLeft: '5px',
        width: '430px',
    },

    hiddenItem: {
        visibility: "hidden",
    },

    itemCheckBox: {
        position: 'absolute',
        left: '0',
        top: '9%'
    },

    done: {
        textDecoration: "line-through",
        borderRadius: '5px',
        backgroundColor: "#F4F1F1",
    },

    delIcon: {
        cursor: 'pointer',
        marginTop: '4px',
        '&:hover': {
            backgroundColor: "#ff7979",
            borderRadius: '15px'
        },   
    },
})

function ToDoList(props) {
    const { classes, toDoList, removeFromList } = props;

    const handleRemoveButtonClick = e => {
        removeFromList(e.currentTarget.dataset.item);
    }

    const handleDoneItems = e => {
        e.currentTarget.parentElement.classList.toggle(classes.done);
        e.currentTarget.children[0].classList.toggle(classes.hiddenItem);
        e.currentTarget.children[1].classList.toggle(classes.hiddenItem);
    }

    
    const list = toDoList.map(item => 
        <div  key={item} className={classes.todoItem}>
            <div onClick={handleDoneItems} className={classes.itemRow}>
                <CheckBox className={classes.hiddenItem} style={{marginTop: '3px'}} />
                <CheckBoxOutlineBlank className={classes.itemCheckBox} />
                <Tooltip title={item}>
                    <span className={classes.itemText}>{item}</span>
                </Tooltip>
            </div>
            <DeleteIcon onClick={handleRemoveButtonClick} data-item={item} className={classes.delIcon}/>
        </div>
    )

    return (
        <div>
            {list}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toDoList: state
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ removeFromList }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(ToDoList));