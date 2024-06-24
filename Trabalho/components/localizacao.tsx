import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Localizacao from "../../components/localizacao"

import { useState } from 'react';



export default function HomeScreen() {
  const [page, setPage] = useState('home');

  const paginacao = () => {
    if (page === 'home') {
      // return <Home />;
    } else if (page === 'localizacao') {
      return <Localizacao />;
    }
  };
  return (
    <div style={styles.container} >
      {paginacao()}
      <h1 style={styles.titulo}>Saiba a sua localização neste exato momento</h1>
      <div style={styles.imagem} >
      <Image style={styles.logo} source={require('../../assets/Vector.png')} />
      </div>
      <div style={styles.divButton} >
      <TouchableOpacity style={styles.button} onPress={()=>setPage('localizacao')}>
        <Text style={styles.textButton}>Verificar localidade</Text>

        
      </TouchableOpacity>
      </div>
      
    </div>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#2F2F2F",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    
  },
  titulo: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 20,
    alignItems: "center",
    textAlign: 'center'
    // fontFamily: 'Poppins_400Regular',

    
  },
  button: {
    backgroundColor: "#9820E2",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  logo: {
    alignItems: "center",
    alignContent: 'center',
    justifyContent: 'center'
  },

  textButton: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Poppins_400Regular',
    textTransform: "uppercase",
  },

  imagem:{
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divButton:{
    marginTop: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
