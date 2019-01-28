import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';

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

class ToDoList extends Component {

    handleRemoveButtonClick = (e) => {
        this.props.removeItemFromList(e.currentTarget.dataset.item);
    }

    handleDoneItems = (e) => {
        e.currentTarget.parentElement.classList.toggle(this.props.classes.done);
        e.currentTarget.children[0].classList.toggle(this.props.classes.hiddenItem);
        e.currentTarget.children[1].classList.toggle(this.props.classes.hiddenItem);
    }


    render () {
        const { classes } = this.props;
        
        const list = this.props.toDoList.map(item => 
            <div  key={item} className={classes.todoItem}>
                <div onClick={this.handleDoneItems} className={classes.itemRow}>
                    <CheckBox className={classes.hiddenItem} style={{marginTop: '3px'}} />
                    <CheckBoxOutlineBlank className={classes.itemCheckBox} />
                    <Tooltip title={item}>
                      <span className={classes.itemText}>{item}</span>
                    </Tooltip>
                </div>
                <DeleteIcon onClick={this.handleRemoveButtonClick} data-item={item} className={classes.delIcon}/>
            </div>
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default withStyles(styles)(ToDoList);