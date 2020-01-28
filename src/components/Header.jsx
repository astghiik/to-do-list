import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToList } from '../actions';

const styles = () => ({
    appHeader: {
        marginBottom: '25px',
        marginLeft: '35px'
    },
    input: {
        width: "400px"
    }
});


function Header(props) {
    const [itemValue, setItemValue] = useState('');
    const { classes, addToList } = props;

    const handleChange = e => {
        setItemValue(e.target.value);
    };

    const handleAddButtonClick = () => {
        addToList(itemValue);
        setItemValue('');
    };

    const handleEnterKey = event => {
        if (event.keyCode === 13) handleAddButtonClick();
    };
    
    
    return (
        <div className={classes.appHeader}>
            <Typography variant="h3" style={{margin: '0 0 50px 105px'}}>To-Do List</Typography>
            <Input 
                className={classes.input}
                type='text' 
                onChange={handleChange} 
                onKeyDown={handleEnterKey} 
                value={itemValue} 
                placeholder='what next?' 
            />
            <Button color="primary" onClick={handleAddButtonClick}>
                Add
            </Button>
        </div>
    );
    
}


const matchDispatchToProps = dispatch => {
    return bindActionCreators({ addToList }, dispatch);
}

export default connect(null, matchDispatchToProps)(withStyles(styles)(Header));