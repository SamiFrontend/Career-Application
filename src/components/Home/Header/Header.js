import { View, Text } from "react-native";
import React from "react";
import UserInfo from "./UserInfo";
import Notification from "./Notification";
import Container from "../../UI/Container";

export default function Header() {
  return (
    <>
      <Container style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom : 0
      }}>
        <UserInfo />
        <Notification />
      </Container>
    </>
  );
}
