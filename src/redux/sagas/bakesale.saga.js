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

    yield put({ type: 'SET_SINGLE_BAKESALE', payload: bakesale.data }); //set selected bakesale in bakesaleReducer

  } catch (error) {
    console.log('Error with fetchBakesaleDetail saga:', error);
  }
}

function* editBakesale(action) {
  const id = action.payload.id; //because all threat info expected in payload
  // console.log('SAGA edit bakesale:', action.payload.id);

  try {
    yield axios.put(`/api/bakesale/${id}`, action.payload);

    yield put({ type: 'FETCH_BAKESALES' }); //GET following PUT
    yield put({type: 'CLOSE_EDIT_DIALOG'}); //to editMode reducer

  } catch (error) {
    console.log('Error with editBakesale saga:', error);
  }
}

function* deleteBakesale(action) {
  const id = action.payload; //because all threat info expected in payload
  console.log('SAGA delete bakesale:', id);

  try {
    yield axios.delete(`/api/bakesale/delete/${id}`);

    yield put({ type: 'FETCH_BAKESALES' }); //GET following DELETE

  } catch (error) {
    console.log('Error with deleteBakesale saga:', error);
  }
}

function* bakesaleSaga() {

  yield takeLatest('ADD_BAKESALE', addBakesale);
  yield takeLatest('FETCH_BAKESALES', fetchBakesales);
  yield takeLatest('FETCH_BAKESALE_DETAIL', fetchBakesaleDetail);
  yield takeLatest('SUBMIT_EDIT_BAKESALE', editBakesale);
  yield takeLatest('DELETE_BAKESALE', deleteBakesale);
}

export default bakesaleSaga;