import React, { useState }from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(''); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('')
  }


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor:'black',
    borderWidth: 10,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default GoalInput;