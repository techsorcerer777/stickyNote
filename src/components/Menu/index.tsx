import React, { useState } from "react";
import { darken, lighten } from "polished";
import {
  StyleSheet,
  Modal,
  FlatList,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

interface PropsType {
  primaryColor: string;
  data: string[];
  selectedItem: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ primaryColor, data, selectedItem, onChange }: PropsType) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const darkenedColor = darken(0.06, primaryColor);
  const lightenedColor = lighten(0.05, primaryColor);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const selectItem = (item: string) => {
    onChange(item);
    toggleModal();
  };

  const renderItem = ({ item }: { item: string }) => (
    <MenuItem
      onPress={() => selectItem(item)}
      color={selectedItem === item ? lightenedColor : darkenedColor}
    >
      <ItemText>{item}</ItemText>
    </MenuItem>
  );

  return (
    <>
      <MenuWrapper color={primaryColor}>
        <MenuButton android_ripple={styles.rippleStyle} onPress={toggleModal}>
          <ButtonText>{selectedItem}</ButtonText>
        </MenuButton>
      </MenuWrapper>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={toggleModal}
          style={styles.touchableOpacity}
        >
          <ModalContainer>
            <TouchableWithoutFeedback>
              <View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item}
                  style={styles.modal}
                  contentContainerStyle={[
                    styles.modalContainer,
                    { backgroundColor: darkenedColor },
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
          </ModalContainer>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const MenuWrapper = styled.View<{ color: string }>`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  border-color: #fff;
  background-color: ${(props) => props.color};
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

const ModalContainer = styled.View`
  width: 80%;
`;

const ItemText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

const MenuItem = styled.Pressable<ColorType>`
  padding: 12px 36px;
  background-color: ${(props) => props.color};
`;

const styles = StyleSheet.create({
  modal: {
    width: "100%",
    flexGrow: 0,
  },
  modalContainer: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#fff",
    height: "auto",
    overflow: "hidden",
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rippleStyle: { color: "#ffffff30", borderless: true },
});

export default Menu;
