import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import ListQuestionsPage from './components/QuestionsPage/ListQuestionsPage';
import QuestionPage from './components/QuestionsPage/QuestionPage';

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return null;

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route path='/login'>
            <LoginFormPage/>
          </Route>
          <Route path='/signup'>
            <SignupFormPage/>
          </Route>
          <Route path='/new-question'>
            <QuestionsPage/>
          </Route>
          <Route path='/questions/:questionId'>
            {sessionUser ? <QuestionPage /> : <Redirect to='/signup'/>}
          </Route>
          <Route path='/'>
            <ListQuestionsPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
