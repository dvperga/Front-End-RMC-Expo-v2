import React from "react";
import { Alert, StyleSheet, Image, Text, View } from "react-native";
import Button from "../ComponetsLogin/Button";
import AsyncStorage from "@react-native-community/async-storage";
import { useRoute } from "@react-navigation/native";

export default ({ report, details }) => {
  const route = useRoute();

  const canDelete = route.params.canDelete;

  const onDeleteReport = async (reportId) => {
    await fetch("http://192.168.0.2:8080/report/" + String(reportId), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        Alert.alert("Reporte", responseJson.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.report}>
      <Text style={styles.title}>{report.title}</Text>
      <Text style={styles.titleLeft}>
        <Text style={styles.bold}>Realizado por: </Text>
        <Text>
          {report.user.name} {report.user.lastname}
        </Text>
      </Text>
      <Text style={styles.state}>
        <Text style={styles.bold}>Estado: </Text>
        <Text>{report.state}</Text>
      </Text>
      <Text style={[styles.titleLeft, styles.bold]}>Descripción: </Text>
      <Text style={styles.description}>{report.description}</Text>
      <Text style={[styles.titleLeft, styles.bold]}>Detalles:</Text>
      {details.length > 0 ? (
        details.map((x) => (
          <Text style={styles.description} key={x.id}>
            {x.updateDetail}
          </Text>
        ))
      ) : (
        <Text style={styles.description}>
          No hay Detalles sobre este Reporte
        </Text>
      )}
      <Image
        source={require("../../image/arbol-carretera.jpg")}
        style={styles.image}
      />
      {canDelete && (
        <Button mode="outlined" onPress={() => onDeleteReport(report.id)}>
          Eliminar
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
  },
  report: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    marginLeft: 20,
  },
  titleLeft: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 40,
    marginBottom: 25,
  },
  state: {
    marginLeft: 230,
  },
});
