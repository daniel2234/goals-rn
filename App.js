import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  //use react hook for state management 
  const [courseGoals, setCourseGoals] = useState([]);

  //use react hook for showing modal
  const [isAddMode, setIsAddMode] = useState(false);

  //addGoalHandler function that adds goals to an array
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => 
      [...currentGoals, { 
        id: Math.random().toString(), 
        value: goalTitle
      }])
    setIsAddMode(false);
  }

  //function that removes the goal from the array of goals
  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals=> {
      return currentGoals.filter((goal) => goal.id !== goalID)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add A New Goal" onPress={()=> setIsAddMode(true) }/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
        />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>(
          <GoalItem 
          id={itemData.item.id}
          onDelete={removeGoalHandler} 
          title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
