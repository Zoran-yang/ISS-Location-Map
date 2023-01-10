import { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css"
import "tachyons"

class Map extends Component{
    constructor(){
        super();
        this.issSite = {
            location : {},
        };
    }

    renderStatus = false;

    spaceStation = L.icon({
        iconUrl: 'satellite-solid.svg',
        iconSize: 20, // size of the icon
        // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    fetchIssPosition = async () => { //抓取SSI位置
        await fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(async (pos) => { 
                this.issSite.location = pos.iss_position
            });
    }

    setIssPosition = async () =>{

        if (this.renderStatus !== "rendered"){

            //修改render狀態
            this.renderStatus = "rendered"

            //抓取SSI位置
            await fetch("http://api.open-notify.org/iss-now.json") 
                .then(response => response.json())
                .then(async (pos) => { 
                    this.issSite.location = pos.iss_position
                });
            let {latitude, longitude} = this.issSite.location


            //產生世界地圖
            let map = L.map('map', {minZoom: 1,maxZoom: 4}).setView([latitude, longitude], 1);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            //設定SSI位置圖像
            L.circle([latitude, longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 2000000
                }).addTo(map);
            L.marker([latitude, longitude], {icon: this.spaceStation}).addTo(map);
    
        }
    }

    componentDidMount(){
        this.setIssPosition()
    }

    render(){
        return (
            <div className ="map" id="map" style={{ height: "300px", width: "500px" }} />
        )
    }
}


export default Map