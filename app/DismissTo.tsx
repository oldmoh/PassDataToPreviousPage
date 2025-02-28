import { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const [value, setValue] = useState('');
  const router = useRouter();

  return (
    <View style={{ padding: 8, gap: 8 }}>
      <Text>値を入力してください</Text>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="値"
        style={{ borderWidth: 1, borderRadius: 12 }}
      />
      <Button
        title="戻る"
        onPress={() => {
          router.dismissTo({ pathname: '/', params: { value } });
        }}
      />
    </View>
  );
}
