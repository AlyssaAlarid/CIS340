import React from 'react';
import { Text, View, FlatList } from 'react-native';



export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <FlatList 
        data={[
          {key: 'Alabama'},
          {Key: 'Alaska'},
          {Key: 'Arizona'},
          {Key: 'Arkansas'},
          {Key: 'California'},
          {Key: 'Colorado'},
          {Key: 'Delaware'},
          {Key: 'Florida'},
          {Key: 'Georgia'},
          {Key: 'Hawaii'},
          {Key: 'Idaho'},
          {Key: 'Illinois'},
          {Key: 'Indiana'},
          {Key: 'Iowa'},
          {Key: 'Kansas'},
          {Key: 'Kentucky'},
          {Key: 'Maine'},
          {Key: 'Maryland'},
          {Key: 'Massachusetts'},
          {Key: 'Michigan'},
          {Key: 'Minnesota'},
          {Key: 'Missisppi'},
        ]}
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44, }}> {item.key} </Text> }
      />

    </View>




  );
}

