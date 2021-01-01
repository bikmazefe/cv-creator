import './styles/style.scss'
import GeneralInfo from './components/GeneralInfo'
import EducationFields from './components/EducationFields'
import JobFields from './components/JobFields'

function App() {
  return (
    <div className="App">
        <main>
            <GeneralInfo />
            <div className="details">
              <EducationFields/>
              <JobFields/>
            </div>
        </main>
    </div>
  );
}

export default App;
