import { View, Text } from 'react-native';
import { useAssets } from 'expo-asset';

const Page = () => {
  const [assets] = useAssets ([ require ('@/assets/video/intro.mp4')]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Page;