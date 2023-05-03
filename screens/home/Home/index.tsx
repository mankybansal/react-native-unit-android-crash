import { Text } from "react-native";
import React from "react";
import { Flex } from "../../../components/Flex";

export const Home = () => {
  return (
    <Flex column style={{ padding: 24 }}>
      <Text style={{ fontSize: 32 }}>Home</Text>
      <Text style={{ fontSize: 16, marginTop: 16, fontWeight: "bold" }}>
        react-native-unit-components Card crash Repro Steps:
      </Text>
      <Text style={{ fontSize: 16 }}>1. Run this on an Android device</Text>
      <Text style={{ fontSize: 16 }}>
        2. Update SAMPLE_TOKEN in DebitCard.tsx to a customer token with the
        following scopes:
      </Text>
      <Text style={{ fontSize: 16, backgroundColor: "#CCC" }}>
        customers cards cards-sensitive cards-write
      </Text>
      <Text style={{ fontSize: 16 }}>3. Tap on the Card tab</Text>
      <Text style={{ fontSize: 16 }}>
        4. tap on the (+) button on the top right of the card
      </Text>
      <Text style={{ fontSize: 16 }}>
        5. expand all the cards so that all cards are visible
      </Text>
      <Text style={{ fontSize: 16 }}>
        6. expand and collapse the cards a few times
      </Text>
    </Flex>
  );
};
