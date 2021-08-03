import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Burası Notifications Ekranı</Text>
      <Button title="Settings Ekranına Git" onPress={()=>navigation.navigate('Settings')}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAC9D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
