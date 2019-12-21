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
            const res = await axios.get('http://api-frontend.inmokey.com/properties/'+ this.props.match.params.id , options);
             this.setState({ properties: res.data })
            console.log(this.state.properties)
        }}

    render() {
        const precio = this.state.properties.price

        return (

            <div className="row">
                
                    
                        <div className="col-md-8 p-4">
                            <div class="card">
                                <h5 class="card-header">{this.state.properties.title}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">{this.state.properties.short_description}</h5>
                                    <img src="" alt=""/>
                                    <p class="card-text">{this.state.properties.description}</p>
                                    <p class="card-text">Precio: $ {precio}.-</p>
                                </div>
                            </div>


                            {/* <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.properties.title}</h5>
                                    <h4>{this.state.properties.short_description}></h4>
                                    <p className="card-text">{this.state.properties.description}</p>
                                    <p className="card-text">Precio: $ {this.state.properties.price}</p>
                                <button className="btn btn-primary">AASD</button> 
                                </div>
                            </div> */}
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
                                    placeholder="Teléfono"
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
                                    placeholder="Consulta"
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
