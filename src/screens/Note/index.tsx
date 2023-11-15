import "react-native-get-random-values";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  BackHandler,
  StatusBar,
  Platform,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { darken } from "polished";
import Icon from "react-native-vector-icons/AntDesign";
import { v4 as uuidv4 } from "uuid";

import { screenNames } from "../../constants/screen";
import DropdownGroup from "../../components/MenuGroup";
import categoryList from "../../constants/category.json";
import clientList from "../../constants/client.json";
import {
  requestCreateNote,
  requestUpdateNote,
  requestDeleteNote,
} from "../../redux/slice";
import { LightBlue } from "../../constants/colors";

type PropsType = NativeStackScreenProps<RootStackParamList, "Note">;

const NoteScreen = ({ route, navigation }: PropsType) => {
  const dispatch = useDispatch();

  const {
    note: _note = "",
    category: _category = "None",
    client: _client = "None",
    id,
    color: lightColor = LightBlue,
  } = route.params || {};
  const [note, setNote] = useState<string>(_note);
  const [category, setCategory] = useState<string>(_category);
  const [client, setClient] = useState<string>(_client);
  const darkenColor = darken(0.05, lightColor);
  const lightenColor = lightColor;

  const onSubmit = () => {
    const noteData = { note, category, client, id: id || uuidv4() };
    dispatch(id ? requestUpdateNote(noteData) : requestCreateNote(noteData));
    navigation.navigate(screenNames.Home, {
      screen: screenNames.Home,
    });
  };

  const onDelete = () => {
    dispatch(requestDeleteNote({ id }));
    navigation.navigate(screenNames.Home, {
      screen: screenNames.Home,
    });
  };

  const backAction = () => {
    onSubmit();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
    };
  }, [category, note, client]);

  return (
    <Wrapper color={lightenColor}>
      <StatusBar backgroundColor={darkenColor} barStyle="light-content" />
      <Header color={darkenColor} isIOS={Platform.OS === "ios"}>
        <Icon name="left" size={30} color="#fff" onPress={() => onSubmit()} />
        <Icon name="delete" size={30} color="#fff" onPress={() => onDelete()} />
      </Header>
      <Category>
        <DropdownGroup
          title="tag"
          primaryColor={darkenColor}
          data={categoryList}
          selectedItem={category}
          onChange={setCategory}
        />
        <DropdownGroup
          title="person"
          primaryColor={darkenColor}
          data={clientList}
          selectedItem={client}
          onChange={setClient}
        />
      </Category>
      <ScrollView
        contentContainerStyle={{ flex: 1, backgroundColor: darkenColor }}
      >
        <View style={{ flex: 1 }}>
          <Input
            multiline
            numberOfLines={4}
            autoCorrect={false}
            onChangeText={setNote}
            selectionColor={"#fff"}
            style={{ textAlignVertical: "top" }}
            value={note}
            placeholderTextColor={"#fff"}
            placeholder="Take a note..."
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View<ColorType>`
  flex: 1;
  background-color: ${(props) => props.color};
`;

const Header = styled.View<ColorType & PlatformType>`
  padding: 12px 20px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.color};
  padding-top: ${(props) => props.isIOS && "36px"};
`;

const Input = styled.TextInput`
  padding: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1.5px;
  flex: 1;
  color: #fff;
`;

const Category = styled.View`
  width: 100%;
  padding: 8px 24px;
`;

export default NoteScreen;
