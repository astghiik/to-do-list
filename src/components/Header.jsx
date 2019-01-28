import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


const styles = () => ({
    appHeader: {
        marginBottom: '25px',
        marginLeft: '35px'
    },
    input: {
        width: "400px"
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemValue: ''
        };
    }

    handleChange = e => {
        this.setState({ itemValue: e.target.value });
    }

    handleAddButtonClick = () => {
        const { itemValue } = this.state;

        // this.props.toDoList.push(itemValue);
        this.props.addItemToList(itemValue);
        this.setState({ itemValue: '' });
    }

    handleEnterKey = (event) => {
        if (event.keyCode === 13) this.handleAddButtonClick();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEnterKey);
    }
    

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.appHeader}>
                <Typography variant="h3" style={{margin: '0 0 50px 105px'}}>To-Do List</Typography>
                <Input className={classes.input} type='text' onChange={this.handleChange} value={this.state.itemValue} placeholder='what next?' />
                <Button color="primary" onClick={this.handleAddButtonClick}>
                    Add
                </Button>
                
            </div>
        );
    }
}

export default withStyles(styles)(Header);