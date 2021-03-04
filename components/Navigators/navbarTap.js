import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Home, Location } from "../screens/index";
import FormReportStack from "./FormReportStack";
import ReportStack from "./ReportsStack";

const Tab = createBottomTabNavigator();

export default navBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#feB139"
      tabBarOptions={{ activeTintColor: "#FEB139" }}
      style={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Crear Reporte"
        component={FormReportStack}
        options={{
          tabBarLabel: "Crear Reporte",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Reportes"
        component={ReportStack}
        options={{
          tabBarLabel: "Reportes",
          tabBarIcon: ({ color }) => (
            <AntDesign name="bells" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Location}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
