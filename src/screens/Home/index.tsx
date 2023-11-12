import React, { useEffect } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import { StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import NoteCard from "../../components/NoteCard";
import { screenNames } from "../../constants/screen";
import { requestGetNotes } from "../../redux/slice";
import { selectorNotes, selectorIsLoading } from "../../redux/selector";
import { ThemeColor } from "../../constants/colors";
import { PrimaryColor } from "../../constants/colors";

type PropsType = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: PropsType) => {
  const dispatch = useDispatch();
  const notes = selectorNotes();
  const isLoading = selectorIsLoading();

  useEffect(() => {}, []);

  const newNotes = notes.map((item, index) => ({
    ...item,
    color: ThemeColor[index % ThemeColor.length],
  }));

  useEffect(() => {
    dispatch(requestGetNotes());
  }, []);

  return (
    <Wrapper>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header>
        <SecondaryText>Simple Note</SecondaryText>
        <Button onPress={() => navigation.navigate(screenNames.Note, {})}>
          <PrimaryText>+</PrimaryText>
        </Button>
      </Header>
      {isLoading ? (
        <Text>...Loading</Text>
      ) : newNotes.length == 0 ? (
        <Empty>
          <EmptyText>Nothing to Show</EmptyText>
        </Empty>
      ) : (
        <FlatList
          data={newNotes}
          renderItem={(item) => <NoteCard navigation={navigation} {...item} />}
          keyExtractor={(_, index) => index.toString()}
          style={{ flex: 1, marginTop: 24 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 24px;
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  color: ${PrimaryColor};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 60px;
`;

const Button = styled.Pressable`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${PrimaryColor};
  justify-content: center;
  align-items: center;
`;

const PrimaryText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const SecondaryText = styled.Text`
  color: ${PrimaryColor};
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;

const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${PrimaryColor};
  font-size: 24px;
`;

export default HomeScreen;
