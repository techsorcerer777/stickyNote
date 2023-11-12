import React, { useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Entypo";

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
      <DropDownPicker
        open={open}
        value={selectedItem}
        items={items}
        setOpen={setOpen}
        setValue={onChange}
        setItems={setItems}
        ArrowUpIconComponent={() => (
          <Icon name={"chevron-thin-up"} size={16} color={"#fff"} />
        )}
        ArrowDownIconComponent={() => (
          <Icon name={"chevron-thin-down"} size={16} color={"#fff"} />
        )}
        showTickIcon={false}
        zIndex={zIndex}
        textStyle={styles.text}
        zIndexInverse={4000 - zIndex}
        style={{
          ...styles.dropdown,
          backgroundColor: primaryColor,
        }}
        dropDownContainerStyle={{
          ...styles.dropdownContainer,
          backgroundColor: primaryColor,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 80%;
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
});

export default Dropdown;
