import AsyncStorage from "@react-native-async-storage/async-storage";

const getNotes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("my-note");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("error", error);
  }
};

const storeNotes = async (value: NoteType[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("my-note", jsonValue);
  } catch (error) {
    console.log("error", error);
  }
};

export { getNotes, storeNotes };
