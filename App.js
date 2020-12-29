import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, ImagePropTypes, Button, useWindowDimensions } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Hello World!</Text>
      <View>
        <Text>more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
      <Dog name="Bob1" />
      <Dog name="Bob2" />
      <Dog name="Bob3" />
      <DogTranslator />
    </ScrollView>
  );
}

export function Dog(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        title={isHungry ? "Gimme a bone!" : "Thank you!"}
      />
    </View>
  );
}

export function DogTranslator() {
  const [userInput, setUserInput] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setUserInput(text)}
        defaultValue={userInput}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {userInput.split(' ').map((word) => word && '🦴').join(' ')}
      </Text>
    </View>
  );
}