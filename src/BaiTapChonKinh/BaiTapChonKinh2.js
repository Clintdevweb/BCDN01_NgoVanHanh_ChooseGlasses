// Cách 1

import React, { Component } from 'react'
import dataGlasses from "../data/chonkinh.json"


export default class BaiTapChonKinh2 extends Component {


    state ={
        title:"GUCCI G8759H",
        url:"./glassesImage/v2.png",
        description:"Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
    }
    
    glassesProduct = () => {
        return dataGlasses.map((glass, index) => {
               
            return (
                <img key={index} className='ml-2 p-2 border border-width-1' src={glass.url} alt="" style={{width:'110px', cursor:"pointer"}} onClick={() =>{this.changeGlass(glass)}}/>
            )
        })
    }

    changeGlass = (glass) => {
        this.setState({
            title: glass.name,
            url: glass.url,
            description:glass.desc
        })
    }
    
    

    

    render() {
        return (
            <div style={{backgroundImage: `url(./glassesImage/background.jpg)`, backgroundSize:"cover", height:"100vh"}}>
                <div style={{ background: "rgba(0, 0, 0, 0.8)", height: "100%" }} >
                    <h3 style={{ background: "rgba(0, 0, 0, 0.3)" }} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>

                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className="position-absolute" src="./glassesImage/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                                    <img className="position-absolute glassesStyle" src={this.state.url} style={{width:"150px", top:"75px", right:"70px", opacity:"0.7"}} />

                                    <div className="position-relative " style={{ width: 250, top: 200, left: 270, paddingLeft: 15, backgroundColor: 'rgba(255, 127, 0, 0.5)', textAlign: 'left', height: 105 }}>
                                        <span className="font-weight-bold" style={{ color: 'rgb(171, 130, 255)', fontSize: 17 }}>{this.state.title}</span>
                                        <br />
                                        <span style={{ fontSize: 14, paddingRight: 5, fontWeight: 400 }}>{this.state.description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="./glassesImage/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                        {this.glassesProduct()}
                    </div>
                </div>
            </div>
        )
    }
}
