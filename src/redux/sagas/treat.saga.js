import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addTreat(action) {
  try {
    // passes user's treat data from the payload to the server
    yield axios.post('/api/treat/addTreat', action.payload);

  } catch (error) {
    console.log('Error with add treat saga:', error);
  }
}

function* fetchTreats() {
    // get all treats from the DB
    try {
      const treats = yield axios.get('/api/treat/fetchTreats');
      console.log('get all treats:', treats.data);
      yield put({ type: 'SET_TREATS', payload: treats.data }); //set in treatReducer

    } catch (error) {
      console.log('Error with fetchTreat saga:', error);
    }
  }


function* treatSaga() {
  yield takeLatest('ADD_TREAT', addTreat);
  yield takeLatest('FETCH_TREATS', fetchTreats);
}

export default treatSaga;
