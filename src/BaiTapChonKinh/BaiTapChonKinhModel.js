// Cách 2

import React, { Component } from 'react'
import dataKinh from "../data/chonkinh.json"
export default class BaiTapChonKinhModel extends Component {

    state = {
        url: "./glassesImage/v0.png",
        title: "",
        decs: "",
        price: ""
    }

    changeClasses = (ver) => {
        dataKinh.map((classeItem, index) => {
            if (ver == classeItem.id) {
                this.setState({
                    url: classeItem.url,
                    title: classeItem.name,
                    decs: classeItem.desc,
                    price: `Price: ${classeItem.price} $`
                })

            }
        })
    }


    render() {

        return (

            <div className="bgBaiTap" style={{ backgroundImage: `url(./glassesImage/background.jpg)` }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <img className="card-img-top imgModel" src="./glassesImage/model.jpg" alt="Image model" />
                            <img className="imgKinh w-50" src={this.state.url} alt="" style={{opacity: "0.7"}} />
                        </div>

                        <div className='col-4 bg-light'>
                            <h3 className="py-3">Thông tin chi tiết sản phẩm</h3>
                            <h5 className="card-title">{this.state.title}</h5>
                            <p className="card-text">{this.state.decs}</p>
                            <p className="card-text">{this.state.price}</p>
                        </div>
                    </div>
                    <div className="container py-3 w-70">
                        <div className="row bg-light align-items-center text-center">
                            <div className="col-4" onClick={() => { this.changeClasses("1") }}>
                                <img className="w-25 " src="./glassesImage/g1.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("2") }}>
                                <img className="w-25" src="./glassesImage/g2.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("3") }}>
                                <img className="w-25" src="./glassesImage/g3.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("4") }}>
                                <img className="w-25" src="./glassesImage/g4.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("5") }}>
                                <img className="w-25" src="./glassesImage/g5.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("6") }}>
                                <img className="w-25" src="./glassesImage/g6.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("7") }}>
                                <img className="w-25" src="./glassesImage/g7.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("8") }}>
                                <img className="w-25" src="./glassesImage/g8.jpg" alt="" />
                            </div>
                            <div className="col-4" onClick={() => { this.changeClasses("9") }}>
                                <img className="w-25" src="./glassesImage/g9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

