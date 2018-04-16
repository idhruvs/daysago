import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './add-event.css';
import TextField from 'material-ui/TextField';
import {images} from '../../assets/images';

export default class AddEvent extends React.Component {
  
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
            event: ''
        };
    }
    

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    const randomImage = Math.ceil(Math.random()*7);
    if(this.state.event.length > 0) {
        this.props.updateEventHandle({
            img: images[randomImage],
            title: this.state.event,
            daysago: '',
            onDate: new Date()
        });
    }
    this.setState({event:''});
  };

  handleChange = (event) => {
      this.setState({event: event.target.value})
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    const style = {
        marginRight: 20
    }
    return (
      <div className="add-event-wrapper">
        <FloatingActionButton style={style} onClick={this.handleOpen}>
            <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add New Event"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
            <TextField hintText="Event name" onChange={this.handleChange.bind(this)} />
        </Dialog>
      </div>
    );
  }
}