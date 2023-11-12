import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Octicons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { clipText } from "../../utils/stringFunc";
import { screenNames } from "../../constants/screen";
import { LightBlue } from "../../constants/colors";

interface PropsType {
  item: NoteType;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>;
}

const NoteCard = ({ item, navigation }: PropsType) => {
  const { note, category, client, color = LightBlue } = item;
  return (
    <Wrapper
      onPress={() =>
        navigation.navigate(screenNames.Note, {
          ...item,
        })
      }
      color={color}
    >
      <Footer>
        <Group>
          <Icon name="tag" size={14} color="#fff" style={{ width: 18 }} />
          <SubText>: {category}</SubText>
        </Group>
        <Group>
          <Icon name="person" size={14} color="#fff" style={{ width: 18 }} />
          <SubText>: {client}</SubText>
        </Group>
      </Footer>
      <Text>{clipText(note)}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.Pressable<ColorType>`
  margin-bottom: 12px;
  background-color: ${(props) => props.color};
  border-radius: 18px;
  padding: 24px;
  height: 172px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 24px;
`;

const SubText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 20px;
`;

const Group = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Footer = styled.View`
  padding-bottom: 8px;
  gap: 2px;
`;

export default NoteCard;
