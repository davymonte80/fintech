import { View, Text } from 'react-native';
import { useAssets } from 'expo-asset';

const Page = () => {
  const [assets] = useAssets ([ require ('@/assets/video/intro.mp4')]);
  return (
    <View style={StyleSheet.container}>
     {assets &&(
      <Video source={{uri:assets[0].uri }} style={{width:300, height:300}}
     )}
    </View>

  );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
}
)

export default Page;