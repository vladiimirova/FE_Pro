import { configureStore, createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: function(state, action) {
      state.taskList.push(action.payload); 
    },
    deleteTask: function(state, action) {
      state.taskList = state.taskList.filter(function(task) {
        return task.id !== action.payload; 
      });
    },
    toggleComplete: function(state, action) {
      const task = state.taskList.find(function(task) {
        return task.id === action.payload; 
      });
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTasks: function(state, action) {
      state.taskList = action.payload; 
    },
  },
});


export const { addTask, deleteTask, toggleComplete, setTasks } = taskSlice.actions;

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});

export default store;