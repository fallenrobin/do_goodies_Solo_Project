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

    yield put({ type: 'SET_SINGLE_TREAT', payload: treats.data }); //set selected treat in treatReducer

  } catch (error) {
    console.log('Error with fetchTreatDetail saga:', error);
  }
}

function* editTreat(action) {
<<<<<<< HEAD
  const id = action.payload.id; //because all threat info expected in payload
  // console.log('SAGA edit treat:', action.payload.id);

  try {
    yield axios.put(`/api/treat/${id}`, action.payload);

    yield put({ type: 'FETCH_TREATS' }); //GET following PUT

  } catch (error) {
    console.log('Error with editTreat saga:', error);
  }
}

function* deleteTreat(action) {
  const id = action.payload; //because all threat info expected in payload
  console.log('SAGA delete treat:', id);

  try {
    yield axios.delete(`/api/treat/delete/${id}`);

    yield put({ type: 'FETCH_TREATS' }); //GET following DELETE

  } catch (error) {
    console.log('Error with deleteTreat saga:', error);
=======

  const id = action.payload;
  console.log('SAGA edit treat id:', id);

  try {
    const treats = yield axios.get(`/api/treat/detail/${id}`);

    yield put({ type: 'SET_SINGLE_TREAT', payload: treats.data}); //set selected treat in treatReducer

  } catch (error) {
    console.log('Error with fetchTreatDetail saga:', error);
>>>>>>> feature-edit-treat
  }
}

function* treatSaga() {

  yield takeLatest('ADD_TREAT', addTreat);
  yield takeLatest('FETCH_TREATS', fetchTreats);
  yield takeLatest('FETCH_TREAT_DETAIL', fetchTreatDetail);
<<<<<<< HEAD
  yield takeLatest('SUBMIT_EDIT_TREAT', editTreat);
  yield takeLatest('DELETE_TREAT', deleteTreat);
=======
  // yield takeLatest('EDIT_TREAT', editTreat);
>>>>>>> feature-edit-treat

}

export default treatSaga;
