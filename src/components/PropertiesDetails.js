import React, { Component } from 'react'
import axios from 'axios'


export default class PropertiesDetails extends Component {

    state = {
        properties: []
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const options = {
                headers: {
                    'X-AUTH-APIKEY': 'e194598874293cb96156c70f2c13ec2ce834e9d6'
                }
            };
            const res = await axios.get('http://api-frontend.inmokey.com/properties/' + this.props.match.params.id, options);
            this.setState({ properties: res.data })
            console.log(this.state.properties)
        }
    }

    render() {
        const precio = this.state.properties.price
        return (
            <div className="row">
                <div className="col-md-8 p-4">
                    <div className="card">
                        <h5 className="card-header">{this.state.properties.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.properties.short_description}</h5>
                            <img src="" alt="" />
                            <p className="card-text">{this.state.properties.description}</p>
                            <p className="card-text">Precio: $ {precio}.-</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 p-4">
                    <div className="card card-body">
                        <h3>Contacto</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                />

                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="EMail"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Mensaje"
                                    name="content"
                                    required>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Consultar
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )

    }
}
