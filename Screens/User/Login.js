import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import Error from '../../Shared/Error';
import StyledButton from '../../Shared/StyledComponents/StyledButton';
//Context
import AuthGlobal from '../../Context/store/AuthGlobal';
import { loginUser } from '../../Context/actions/Auth.actions';

const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate('Home', { screen: 'User Profile' });
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    if (email === '' || password === '') {
      setError('Please fill in credentials');
    } else {
      setError();
      loginUser(user, context.dispatch);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormContainer title={'Login'}>
        <Input
          placeholder={'Enter Email'}
          name={'email'}
          id={'email'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder={'Enter Password'}
          name={'password'}
          id={'password'}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text.toLowerCase())}
        />
        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <StyledButton large primary onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Login</Text>
          </StyledButton>
        </View>
        <View style={styles.registerButtonContainer}>
          <Text style={styles.middleText}>Don't have an account yet?</Text>
          <StyledButton
            large
            secondary
            onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={styles.btnText}>Register</Text>
          </StyledButton>
        </View>
      </FormContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 200,
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  btnText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  registerButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Login;
