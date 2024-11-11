import { create } from 'zustand'; 

const useStore = create(function (set) {
    return {
      id: '', 
      character: null, 
      loading: false, 
      error: null,
  
      setId: function (newId) {
        set({ id: newId, loading: true });
      },
  
      setCharacter: function (data) {
        set({ character: data, loading: false });
      },
  
      setError: function (error) {
        set({ error, loading: false });
      },
  
      clearData: function () {
        set({ id: '', character: null, error: null, loading: false });
      },
    };
  });
  
  export default useStore;