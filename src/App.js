import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import AddEvent from './components/add-event/add-event.js';
import EventList from './components/event-list/event-list';
import * as moment from 'moment';

import { events } from './assets/events';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tilesData : events
        }
    }

    componentDidMount() {
        this.generateDaysAgo();
    }

    generateDaysAgo = () => {
        var eventList = Object.assign([], this.state.tilesData)
        eventList.forEach(event => {
            event.daysago = moment(event.onDate).fromNow();
        });
        this.setState({tilesData: eventList});
    }

    updateEvents = (event) => {
        event.daysago = moment(event.onDate).fromNow();
        this.setState({tilesData: [...this.state.tilesData, event] })
    }

    render() {
        const updateHandler = this.updateEvents;
        return (
            <div className="App">
                <MuiThemeProvider>
                    <AppBar className="App-header"showMenuIconButton={false} title="Days Ago" />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <EventList eventList = {this.state.tilesData}></EventList>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <AddEvent updateEventHandle = {updateHandler.bind(this)} ></AddEvent>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
