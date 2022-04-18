import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addTreat(action) {
  try {
    // passes user's treat data from the payload to the server
    yield axios.post('/api/treat/addTreat', action.payload);

    // gets updated treats from DB
    // yield put({ type: 'FETCH_TREATS'});

    // // set to 'login' mode so they see the login screen
    // // after registration or after they log out
    // yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with add treat saga:', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* newTreatSaga() {
  yield takeLatest('ADD_TREAT', addTreat);
}

export default newTreatSaga;
