import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function HomeScreen() {
  return (
    <div style={styles.container} >
      <h1 style={styles.titulo}>Saiba a sua localização neste exato momento</h1>
      <Image style={styles.logo} source={require('../../assets/Vector.png')} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Verificar localidade</Text>
      </TouchableOpacity>
    </div>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#2F2F2F"
  },
  titulo: {
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: "#9820E2",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  logo: {},

  textButton: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Poppins_400Regular',
  }
});
