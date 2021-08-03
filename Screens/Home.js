import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Burası Home Ekranı</Text>
      <Button title="Profil Ekranına Git" onPress={()=>navigation.navigate('Profile')}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84BDCB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
