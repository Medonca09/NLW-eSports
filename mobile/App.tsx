import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello React Native
        </Text>

        <Button title='send 1'/>
        <Button title='send 2'/>
        <Button title='send 3'/>

      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
    {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
