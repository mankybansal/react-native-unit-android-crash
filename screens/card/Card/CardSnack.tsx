import styled from "@emotion/native";
import Svg, { Path } from "react-native-svg";
import React from "react";
import { Text, View } from "react-native";
import { OutgoLettermark } from "../../../components/OutgoLettermark";
import { OutgoWordmark } from "../../../components/OutgoWordmark";
import { Flex } from "../../../components/Flex";

const RootContainer = styled(View)`
  display: flex;
  margin-top: 12px;
  height: 60px;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  padding: 12px 14px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #114a32;
  position: relative;
`;

const Layer0 = styled(View)`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 0;
  top: 14px;
  right: 12px;
`;

const Layer1 = styled(View)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  top: 0;
`;

const VisaLogo = () => (
  <Svg width="62" height="20" viewBox="0 0 62 20" fill="none">
    <Path
      d="M26.6951 19.6666H21.6703L24.8107 0.345246H29.836L26.6951 19.6666ZM17.4432 0.345246L12.6529 13.6346L12.0861 10.7729L12.0866 10.774L10.3958 2.08492C10.3958 2.08492 10.1914 0.345246 8.01228 0.345246H0.0929261L0 0.672403C0 0.672403 2.42175 1.17683 5.256 2.88084L9.62145 19.6672H14.8568L22.851 0.345246H17.4432ZM56.9652 19.6666H61.5789L57.5563 0.344729H53.5171C51.6519 0.344729 51.1976 1.78463 51.1976 1.78463L43.7036 19.6666H48.9415L49.989 16.7966H56.3766L56.9652 19.6666ZM51.4361 12.832L54.0762 5.60147L55.5615 12.832H51.4361ZM44.0965 4.9916L44.8136 0.842441C44.8136 0.842441 42.6009 0 40.2943 0C37.8007 0 31.8793 1.09104 31.8793 6.39636C31.8793 11.388 38.8291 11.45 38.8291 14.0719C38.8291 16.6938 32.5953 16.224 30.5381 14.5706L29.791 18.909C29.791 18.909 32.0347 20 35.4626 20C38.8916 20 44.0645 18.2226 44.0645 13.385C44.0645 8.36137 37.0522 7.89364 37.0522 5.70949C37.0527 3.52482 41.9463 3.80546 44.0965 4.9916Z"
      fill="white"
    />
  </Svg>
);

const strings = {
  debit: "Debit",
};

export const CardSnack = () => {
  return (
    <RootContainer>
      <Layer0>
        <OutgoLettermark width={"169px"} height={"182px"} />
      </Layer0>
      <Layer1>
        <View>
          <OutgoWordmark w={"100px"} h={"32px"} />
          <Flex column align={"flex-end"} style={{ marginLeft: "auto" }}>
            <Text style={{ marginBottom: 4, color: "white", fontSize: 12 }}>
              {strings.debit}
            </Text>
            <VisaLogo />
          </Flex>
        </View>
      </Layer1>
    </RootContainer>
  );
};
