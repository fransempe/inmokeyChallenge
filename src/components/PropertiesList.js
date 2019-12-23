import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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

        const imagMedium = this.state.properties.map(property => {
            return property.images.map(image => { return ( <img src={image.medium} alt=""/>)  })
        })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.properties.map(property => (
                        <div className="col-md-4 p-2" key={property.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
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
                                <img src={this.state.properties.images[1]} alt=""/>
                              {/* {property.images.map(image => { <img src={image.medium} alt=""/>  })} */}

                                    {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="..." className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="..." className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="..." className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div> */}
                                   
                                    
                                

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
