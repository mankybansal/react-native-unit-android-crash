import { DebitCard } from "./DebitCard";
import React from "react";
import { ScrollView } from "react-native";

export const Card = () => {
  return (
    <ScrollView>
      <DebitCard
        debitCard={{
          cardId: "253701",
          last4Digits: "1234",
          fullName: "John Doe",
        }}
      />
      <DebitCard
        debitCard={{
          cardId: "418049",
          last4Digits: "6780",
          fullName: "Jane Doe",
        }}
      />
      <DebitCard
        debitCard={{
          cardId: "424823",
          last4Digits: "6780",
          fullName: "Jane Doe",
        }}
      />
    </ScrollView>
  );
};
