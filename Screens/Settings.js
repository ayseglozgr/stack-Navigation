import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Burası Settings Ekranı</Text>
      <Button title="Home Ekranına Git" onPress={()=>navigation.navigate('Home')}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7B4C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
