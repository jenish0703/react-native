import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Courses from "../api/Courseapi";

const Course = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }>
              <Text style={styles.buttonText}> course Details </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius:   10,
  },
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor:'lightslategrey',
  },
  courseContainer: {
    padding: 30,
    textAlign: "center",
    borderRadius:   15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 9,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    textTransform: "capitalize",
  },
});

export default Course;
