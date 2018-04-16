import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import './event-list.css';

export default class EventList extends React.Component {
     render() {
        return (
            <div className="root">
                <GridList
                cellHeight={180}
                className="gridList"
                >
                {this.props.eventList.map((tile) => (
                    <GridTile
                    key={tile.title}
                    title={tile.title}
                    subtitle={<span><b>{tile.daysago}</b></span>}
                    >
                    <img src={tile.img} alt={tile.title}/>
                    </GridTile>
                ))}
                </GridList>
            </div>
        )
    }
}
