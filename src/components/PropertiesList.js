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
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.properties.map(property => (
                        <div className="col-md-4 p-2" key={property.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{property.title}</h5>
                                    <Link to={"/view/"+ property.id} className="btn btn-secondary">
                                        <i
                                            className="material-icons"
                                        >
                                            Ver detalle</i>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h4>
                                        {property.property_type.name} - {property.transaction_type.name}
                                    </h4>
                                    <div className="container">
                                    </div>
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
