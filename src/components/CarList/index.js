import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import CarDetails from "../CarDetails";

class CarList extends Component {
    state = { carList: [] }

    componentDidMount() {
        axios.get('https://givecars.herokuapp.com')
            .then((response) => {
                this.setState({ carList: response.data })
            })
    }

    renderList = () => {
        return this.state.carList.map((brand, index) => {
            return <CarDetails key={index} brand={brand} />
        })
    }

    render() {
        console.log(this.state)

        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        )
    }
}

export default CarList;