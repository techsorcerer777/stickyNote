interface NoteType {
  id: string;
  note: string;
  category: string;
  client: string;
  color?: string;
}

interface ColorType {
  color: string;
}

type RootStackParamList = {
  Note: {
    note?: string;
    category?: string;
    client?: string;
    id?: string;
    color?: string;
  };
  Home: {};
};
