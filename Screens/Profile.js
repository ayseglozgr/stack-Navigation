import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Burası Profil Ekranı</Text>
      <Button title="Notifications Ekranına Git" onPress={()=>navigation.navigate('Notifications')}/>
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
