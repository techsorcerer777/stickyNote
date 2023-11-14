import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Modal,
  FlatList,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Pressable,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

interface DropdownType {
  isSelected: boolean;
}

interface PropsType {
  zIndex: number;
  primaryColor: string;
  data: string[];
  selectedItem: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({
  zIndex,
  primaryColor,
  data,
  selectedItem,
  onChange,
}: PropsType) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    data.map((item) => ({ label: item, value: item }))
  );
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }: any) => {
    return (
      <Item>
        <Text>{item}</Text>
      </Item>
    );
  };

  return (
    <Wrapper>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
          style={{ flex: 1 }}
        >
          <ScrollView directionalLockEnabled={true}>
            <TouchableWithoutFeedback>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item}
              />
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
      <MenuButton
        android_ripple={{ color: "#ffffff30", borderless: true }}
        onPress={() => setModalVisible(true)}
      >
        <ButtonText>{selectedItem}</ButtonText>
      </MenuButton>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  border-color: #fff;
  border-width: 2px;
`;

const MenuButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 1px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const ModalContainer = styled.View<ColorType>`
  border-radius: 24px;
  background-color: ${(props) => props.color};
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Item = styled.View`
  padding: 12px;
  font-size: 18px;
  width: 100%;
  color: #fff;
`;

const style = StyleSheet.create({
  Modal: {
    width: "80%",
    flexGrow: 0,
  },
  ModalContainer: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#fff",
    height: "auto",
  },
});

export default Dropdown;
