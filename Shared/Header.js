import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={Logo} resizeMode='contain' style={{ height: 50 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
  },
});

export default Header;
