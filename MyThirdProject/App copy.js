import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hello, my name is {props.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'cetner',
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name = "Alyssa Alarid"/>
      <Student name = "Alice A" />
      <Student name = "Bob B"/>
      <Student name = "Jon Clark"/>
    </View>
  )

}
