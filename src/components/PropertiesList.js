import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '480px'
};

export default class PropertiesList extends Component {

    state = {
        properties: []
    }

    async componentDidMount() {
        const options = {
            headers: {
                'X-AUTH-APIKEY': 'e194598874293cb96156c70f2c13ec2ce834e9d6'
            }
        };

        const res = await axios.get('http://api-frontend.inmokey.com/properties', options);
        this.setState({ properties: res.data.content })


    }

    render() {
        return (
            <div className="row">

                {
                    this.state.properties.map(property => (
                        <div className="col-md-4 p-2" key={property.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between" >
                                    <h5>{property.property_type.name} - {property.transaction_type.name}</h5>
                                    <Link to={"/view/" + property.id} className="btn btn-primary">
                                        <i className="material-icons">Ver Detalle</i>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h4>
                                        {property.title}
                                    </h4>
                                    <div className="container">
                                    </div>
                                </div>
                                {/* {this.state.properties.map(property => {
                                     return property.images.map(image => { 
                                         return ( {} )  }) })} */}


                                <div style={styles}>
                                    <Carousel>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w500/0/1/p-83201-250614113249-111411.jpg?v=3" alt=""  />
                                        </div>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w500/0/1/p-83201-250614113249-111411.jpg?v=3" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w500/0/1/p-83201-250614113249-111411.jpg?v=3" alt=""/>
                                        </div>
                                    </Carousel>
                                </div>






                                <div className="card-footer">
                                    <p>
                                        {property.country.name} - {property.state.name} - {property.city.name}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
