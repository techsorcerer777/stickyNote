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

interface PlatformType {
  isIOS: boolean;
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
