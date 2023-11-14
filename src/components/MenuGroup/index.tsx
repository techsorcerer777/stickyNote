import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Octicons";

import Dropdown from "../Menu";

interface PropsType {
  title: string;
  primaryColor: string;
  data: string[];
  selectedItem: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownGroup = ({
  title,
  primaryColor,
  data,
  selectedItem,
  onChange,
}: PropsType) => {
  return (
    <Wrapper>
      <Icon name={title} size={30} color="#fff" style={{ width: 30 }} />
      <Title>: </Title>
      <Dropdown
        primaryColor={primaryColor}
        data={data}
        selectedItem={selectedItem}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  gap: 6px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default DropdownGroup;
