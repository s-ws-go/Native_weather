import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Axios from "axios";
import Weather from "./Weather";

const API_KEY = "cf103dc043464dfe8445c7d6ad4a9cc0";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  //getWeather 위해서 Axios 설치하였음
  getWeather = async (latitude, longitude) => {
    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    //axios 덕분에 저 URL 접속했을때의 데이터들이 잘 끌고 와 지는걸 볼 수 있어! (콘솔로그 데이터 보면 다 찍히지)
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      condition: data.weather.main,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
      // send address to api
    } catch (error) {
      Alert.alert("We can't get your Location!", "help Us!!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
