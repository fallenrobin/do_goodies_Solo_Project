import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBakesale(action) {
    try {
      // passes user's bakesale data from the payload to the server
      yield axios.post('/api/bakesale/addBakesale', action.payload);
      yield put
  
    } catch (error) {
      console.log('Error with add bakesale saga:', error);
    }
  }

  // get all bakesales from the DB
function* fetchBakesales() {

    try {
      const bakesales = yield axios.get('/api/bakesale/fetchBakesales');
      console.log('fetching bakesales:', bakesales.data);
      yield put({ type: 'SET_BAKESALES', payload: bakesales.data }); //set in bakesaleReducer
  
    } catch (error) {
      console.log('Error with fetchBakesale saga:', error);
    }
  }

  // get one Bakesale from the DB by id
function* fetchBakesaleDetail(action) {

    const id = action.payload;
    console.log('SAGA single bakesale id:', id);
  
    try {
      const bakesale = yield axios.get(`/api/bakesale/detail/${id}`);
  
      yield put({ type: 'SET_SINGLE_BAKESALE', payload: bakesale.data}); //set selected treat in treatReducer
  
    } catch (error) {
      console.log('Error with fetchBakesaleDetail saga:', error);
    }
  }


  function* bakesaleSaga() {

    yield takeLatest('ADD_BAKESALE', addBakesale);
    yield takeLatest('FETCH_BAKESALES', fetchBakesales);
    yield takeLatest('FETCH_BAKESALE_DETAIL', fetchBakesaleDetail);
  }

  export default bakesaleSaga;