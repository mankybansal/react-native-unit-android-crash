import React, { useState } from "react";
import styled from "@emotion/native";

import Collapsible from "react-native-collapsible";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import * as Haptics from "expo-haptics";
import { UNCardComponent } from "react-native-unit-components";
import { CardSnack } from "./CardSnack";
import { Flex } from "../../../components/Flex";

const RootContainer = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  background: white;
`;

const UnitComponentContainer = styled(View)`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 24px 0;
  background: white;
`;

const UNIT_CARD_THEME_URL =
  "https://ui.s.unit.sh/resources/266/themes/1f7c19c2-d040-4002-8bf1-1875cdc2d54b.json";

const SAMPLE_TOKEN =
  "v2.public.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOm51bGwsInN1YiI6ImN1c3RvbWVyLzM4MzYyMi9tYXlhbmtAbGF0ZXJhbGxpbmUuY28iLCJleHAiOiIyMDIzLTA1LTAzVDAxOjE1OjM3LjY3NFoiLCJqdGkiOm51bGwsIm9yZ0lkIjoiMjY2Iiwic2NvcGUiOiJjdXN0b21lcnMgY2FyZHMgY2FyZHMtc2Vuc2l0aXZlIGNhcmRzLXdyaXRlIiwiY3VzdG9tZXJJZCI6IjM4MzYyMiIsInVzZXJUeXBlIjoiY3VzdG9tZXIifQBXGd6dnJYI7PHez1FGW0lhU_ZqHeHnt2yUQdi5moqa478qOQ28E44LLHoKhjtkKHTQVFOIkRG1sfGDSYPavwg";

export const DebitCard = ({ debitCard }) => {
  const { cardId, last4Digits, fullName } = debitCard;
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickShow = () => {
    setToken(SAMPLE_TOKEN);
    return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleClickHide = () => {
    setToken("");
    setLoading(false);
    return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleOnLoad = () => {
    // Add an artificial delay to make the haptic feedback not feel
    // too jarring when the card loads too quickly.
    setTimeout(() => {
      setLoading(false);
      return Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );
    }, 500);
  };

  return (
    <RootContainer>
      <TouchableOpacity onPress={token ? handleClickHide : handleClickShow}>
        <Flex align={"center"} style={{ padding: 20 }}>
          <Text style={{ fontWeight: "bold" }}>{fullName}</Text>
          <Text style={{ marginLeft: "auto", marginRight: 24 }}>
            *{last4Digits}
          </Text>
          {loading ? (
            <ActivityIndicator
              style={{ marginLeft: 24, width: 24, marginRight: 8 }}
            />
          ) : token ? (
            <Text style={{ fontSize: 24 }}>-</Text>
          ) : (
            <Text style={{ fontSize: 24 }}>+</Text>
          )}
        </Flex>
        {(token === "" || loading) && (
          <View style={{ paddingHorizontal: 16 }}>
            <CardSnack />
          </View>
        )}
      </TouchableOpacity>

      <Collapsible collapsed={loading || !token}>
        {!!token && (
          <UnitComponentContainer>
            <UNCardComponent
              theme={UNIT_CARD_THEME_URL}
              cardId={cardId}
              customerToken={token}
              onLoad={handleOnLoad}
            />
          </UnitComponentContainer>
        )}
      </Collapsible>
    </RootContainer>
  );
};
