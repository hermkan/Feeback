import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/feedbackdata';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/Context';

function App() {
  const [feedBack, setFeedBack] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutLink />
                </>
              }></Route>

            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
