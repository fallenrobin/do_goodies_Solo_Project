import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBakesale(action) {
    try {
      // passes user's bakesale data from the payload to the server
      yield axios.post('/api/bakesale/addBakesale', action.payload);
      
  
    } catch (error) {
      console.log('Error with add bakesale saga:', error);
    }
  }


  function* bakesaleSaga() {

    yield takeLatest('ADD_BAKESALE', addBakesale);
    // yield takeLatest('FETCH_TREATS', fetchTreats);
    // yield takeLatest('FETCH_TREAT_DETAIL', fetchTreatDetail);
  
  }

  export default bakesaleSaga;