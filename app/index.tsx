import { View, Text } from 'react-native';

import { Link, useLocalSearchParams } from 'expo-router';

export default function HomeScreen() {
  const { value } = useLocalSearchParams<{ value: string }>();

  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text style={{ fontSize: 24, paddingVertical: 12 }}>
        前のページに値を渡すについて
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Link
          style={{ borderWidth: 1, borderRadius: 12, padding: 4 }}
          href="/DismissTo"
        >
          DismissTo
        </Link>
        <Link
          style={{ borderWidth: 1, borderRadius: 12, padding: 4 }}
          href="/SetParams"
        >
          SetParams
        </Link>
      </View>
      <Text>渡された値：{value}</Text>
    </View>
  );
}
