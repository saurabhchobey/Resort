import React , {Component} from 'react'
import {RoomContext } from "../context";
import Loading from "./Loading";
import Room from './Room';


export default class FeaturedRooms extends Component{
static contextType= RoomContext ;

    render(){
        const {FeaturedRooms: rooms}= this.context;
        console.log(rooms);

      
return (
        <div>
            hello from room
            <Room/>
            <Loading/>
            
        </div>);
    }
}