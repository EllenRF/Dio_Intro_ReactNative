import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const imageProfile = 'https://avatars.githubusercontent.com/u/92652168?v=4';
const urlGitHug = 'https://github.com/EllenRF';

const App = () =>{

  const handlePressGoToGithub = async()=>{
   const res = await Linking.canOpenURL(urlGitHug);
   if(res){
     Linking.openURL(urlGitHug)
   }
  }
  return(
      <SafeAreaView style={style.container}> 
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
    <View style={style.content}>
      <Image accessibilityLabel='Desenho do avatar da Ellen' style={style.avatar} source={{uri: imageProfile}}/>
      <Text style={[style.text, style.nome]} accessibilityLabel='Nome: Ellen Rocha'>
        Ellen Rocha
      </Text>
      <Text style={[style.text, style.nickname]} accessibilityLabel='Nicknme: EllenRF'>
        EllenRF
      </Text>
      <Text style={[style.text, style.desc]} accessibilityLabel='Descrição: Estudante SI'>
        Estudante SI
        </Text> 
        <Pressable onPress={handlePressGoToGithub}>
      <View style={[style.button, style.text]}>
        <Text> Abrir GitHub</Text>
      </View>
        </Pressable>
    </View>
     </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: 'colorGitHub',
    flex: 1,
    justifyContent:'center'
  },
  content:{
    alignItems: 'center',
    padding: 20
  },
  text:{
    color: 'white'
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100
    },
    nome:{
      fontWeight: 'bold',
      fontSize: 24
    },
    nickname:{
      fontSize: 18,
      color: 'gray'
    },
    desc:{
      fontWeight: 'bold',
      fontSize: 14
    },
    button:{
      marginTop: 20,
      backgroundColor: colorGitHub,
      borderRadius: 10,
      padding: 20,
    }
});