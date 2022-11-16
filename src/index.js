import React from "react";
import ReactDOM from "react-dom/client";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button } from "./UI/components/Button";
import { Login } from "./UI/Screens/LoginScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <Button />
    </div>
    <div>
      <Button />
    </div>
  </>
);
