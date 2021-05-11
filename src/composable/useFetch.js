import { reactive, toRefs } from 'vue';

export default function useFetch(){
    const state = reactive({
        isLoading: false,
        results: [],
        step: 0,
        error: false,
    })

    const getAllData = async () =>{
        state.isLoading = true;
        try{
            const response = await fetch(process.env.VUE_APP_ALL_ITEMS_URL);
            const data = await response.json();
            state.results = data;

            state.results ? state.step = 1 : state.step = 0;
        }
        catch(error){
            state.error = error;
        }
        finally{
            state.isLoading = false;
        }
    }

    const getDataForCategory = async (item) =>{
        state.isLoading = true;
        try{
            const response = await fetch(`${process.env.VUE_APP_ITEMS_FOR_CATEGORY}${item}`);
            const data = await response.json();
            state.results = data;

            state.results ? state.step = 1 : state.step = 0;
        }
        catch(error){
            state.error = error;
        }
        finally{
            state.isLoading = false;
        }
    }

    return{
        ...toRefs(state),
        getAllData,
        getDataForCategory
    }
}