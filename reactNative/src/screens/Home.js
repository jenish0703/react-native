import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Menu from "../component/Menu";
// import { useDimensions } from "@react-native-community/hooks";

const Home = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";
  // useDimensions
  // console.log(useDimensions(), 'screen');
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '200%',
          height: 35,
          position: 'absolute',
          let: 90,
          opacity: 0.1,
        }}
      ></View>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpeg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}>
          Lorem ipsum
        </Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 8,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "lightslategrey",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
    borderColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    textShadowColor: "#000",
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 5,
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 27,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 5,
  },
  lineStyle: {
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default Home;
