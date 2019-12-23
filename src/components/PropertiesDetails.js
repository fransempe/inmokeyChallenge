import React, { Component } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '90%'
};

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

        }
    }

    render() {
        const precio = this.state.properties.price

        if (this.state.properties.status === 'available'){
            var status = 'Disponible';
        } else{ status= 'No disponible'}

        return (
            <div className="row">
                <div className="col-md-8 p-4">
                    <div className="card">
                        <h5 className="card-header">{this.state.properties.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.properties.short_description}</h5>
                        
                           {/* {this.state.properties.map(property => {
                                     return property.images.map(image => { 
                                         return ( console.log("asd") )  }) })}  */}

                            <div style={styles}>
                                    <Carousel>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w1000/0/1/p-83201-250614113249-111411.jpg?v=3" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w1000/0/1/p-83201-250614113249-111411.jpg?v=3" alt="" />
                                        </div>
                                        <div>
                                            <img src="https://cdn-thumbnailer-properties.inmokey.com/p/w1000/0/1/p-83201-250614113249-111411.jpg?v=3" alt="" />
                                        </div>
                                    </Carousel>
                                </div>


                            <p className="card-text">{this.state.properties.description}</p>
                            <p className="card-text">Precio: $ {precio}.-</p>
                            <p className="card-text">{status}</p>
                            

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
                                    type="email"
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
                                    maxLength="150"
                                    required
                                    >
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
