import React, { useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Entypo";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

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

  return (
    <Wrapper>
      <MenuProvider>
        <Menu>
          <MenuTrigger>
            <MenuButton>
              <ButtonText>Click Here!</ButtonText>
            </MenuButton>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => {}} text="Save" />
            <MenuOption onSelect={() => {}}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => {}} disabled={true} text="Disabled" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 60%;
`;

const MenuButton = styled.View`
  border-width: 2px;
  border-radius: 24px;
  border-color: #fff;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 2,
    borderRadius: 24,
    borderColor: "#fff",
    color: "#fff",
  },
  dropdownContainer: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderRadius: 24,
    borderColor: "#fff",
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 200,
    marginHorizontal: 100,
  },
});

export default Dropdown;
