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

// get all treats from the DB
function* fetchTreats() {

  try {
    const treats = yield axios.get('/api/treat/fetchTreats');
    console.log('get all treats:', treats.data);
    yield put({ type: 'SET_TREATS', payload: treats.data }); //set in treatReducer

  } catch (error) {
    console.log('Error with fetchTreat saga:', error);
  }
}

// get one treat from the DB by id
function* fetchTreatDetail(action) {

  const id = action.payload;
  console.log('SAGA single treat id:', id);

  try {
    const treats = yield axios.get(`/api/treat/detail/${id}`);

    yield put({ type: 'SET_SINGLE_TREAT', payload: treats.data}); //set selected treat in treatReducer

  } catch (error) {
    console.log('Error with fetchTreatDetail saga:', error);
  }
}

function* editTreat(action) {
  const id = action.payload.id;
  console.log('SAGA single treat id:', id);

  // try {
  //   const treats = yield axios.put(`/api/treat/detail/${id}`);

  //   yield put({ type: 'SET_SINGLE_TREAT', payload: treats.data}); //set selected treat in treatReducer

  // } catch (error) {
  //   console.log('Error with fetchTreatDetail saga:', error);
  // }
}

function* treatSaga() {

  yield takeLatest('ADD_TREAT', addTreat);
  yield takeLatest('FETCH_TREATS', fetchTreats);
  yield takeLatest('FETCH_TREAT_DETAIL', fetchTreatDetail);
  yield takeLatest('SUBMIT_EDIT_TREAT', editTreat);


}

export default treatSaga;
