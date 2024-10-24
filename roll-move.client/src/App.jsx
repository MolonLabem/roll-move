import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TableOverview from './components/TableOverview';
import ReservationForm from './components/ReservationForm';
import ClubStatus from './components/ClubStatus';
import TournamentList from './components/TournamentList';
import CollectionPage from './components/CollectionPage';

import './App.css';

function App() {
    return (
        <div>
            <h1 id="tableLabel">Roll Move</h1>
            <p>Greatest club in Astana</p>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/tournaments">Tournaments</Link>
                        </li>
                        <li>
                            <Link to="/collection">Collection</Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Screen - Club Status and Table Overview */}
                <div id="mainScreen">
                    <ClubStatus />
                    <TableOverview />
                </div>

                {/* Routes for separate pages */}
                <Routes>
                    <Route path="/reservation" element={<ReservationForm />} />
                    <Route path="/tournaments" element={<TournamentList />} />
                    <Route path="/collection" element={<CollectionPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
