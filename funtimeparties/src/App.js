import IndexPage from './IndexPage';
import CharactersPage from './CharactersPage';
import CharactersFRPage from './CharactersFRPage';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactPage from './ContactPage';
import ContactedPage from './ContactedPage';
import ReviewsPage from './ReviewsPage';
import WriteReviewPage from './WriteReviewPage';
import ReviewedPage from './ReviewedPage';
import BookPage from './BookPage';
import BookConfirmPage from './BookConfirmPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage/>}></Route>
        <Route exact path="/characters" element={<CharactersPage/>}></Route>
        <Route exact path="/characters-fr" element={<CharactersFRPage/>}></Route>
        <Route exact path="/contact" element={<ContactPage/>}></Route>
        <Route exact path="/contacted" element={<ContactedPage/>}></Route>
        <Route exact path="/reviews" element={<ReviewsPage/>}></Route>
        <Route exact path="/write-review" element={<WriteReviewPage/>}></Route>
        <Route exact path="/reviewed" element={<ReviewedPage/>}></Route>
        <Route exact path="/book" element={<BookPage/>}></Route>
        <Route exact path="/book-confirm" element={<BookConfirmPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
