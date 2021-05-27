import {useEffect, useState } from 'react'
import * as Location from 'expo-location'

export default () => {
  const [userLocation, setUserLocation ] = useState({});
  const getLocation = async() => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const { coords : { latitude, longitude}} = await Location.getLastKnownPositionAsync();
    setUserLocation({ latitude, longitude})
  }
  useEffect(() => {
    getLocation()
  }, [])
  return userLocation;
}