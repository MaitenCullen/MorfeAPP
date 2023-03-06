import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import MapPreview from '../src/components/MapPreview';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY_MAPS } from '../src/utilities/MapsAPI';
import { MapsStyles } from '../styles/MapsPreviewStyles'


export default function Maps() {
  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [origin, setOrigin] = useState({
    latitude:  -32.93439873570948,
    longitude:  -60.65383543520691
  })
  
    async function getLocation () {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
      // setLocation(location);
      setOrigin(current);
    }
   
    useEffect(()=>{
      getLocation()
    },[])


  return (
    <View style={styles.container}>
      <MapView 
      style={MapsStyles.mapsIMG}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
        }}>
          <Marker
          coordinate={origin}/>
          <MapViewDirections
           origin={origin}
           apiKey={API_KEY_MAPS}/>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  });