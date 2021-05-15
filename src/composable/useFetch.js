import { reactive, toRefs } from 'vue';

export default function useFetch(){
    const state = reactive({
        isLoading: false,
        results: [],
        step: 0,
        error: false,
    })

    const doRequest = async (url, item = '') =>{
        state.isLoading = true;
        try{
            const response = await fetch(`${url}${item}`);
            const data = await response.json();
            state.results = data;

            state.results ? state.step = 1 : state.step = 0;
        }
        catch(error){
            state.error = true;
        }
        finally{
            state.isLoading = false;
        }
    }

    return{
        ...toRefs(state),
        doRequest,
    }
}