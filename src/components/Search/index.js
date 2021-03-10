import React, { Component } from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'


export default class Search extends Component {
 render() {
     return <GooglePlacesAutocomplete
        placeholder = "Para onde?"
        onPress={() => {}}
        query={{
            key: 'AIzaSyCUQoLbBsZz1WWOIQKro8Kx8rzZuZyRPyo'
        }}
     />
 }
}

