import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
    <div >
      <div class = 'card-list'>
        <Link class = 'card' to = '/create-mtf'>
                <div class='card-img'>
                  <img src="assets/MatchImage.jpg" alt="Match"/>
                </div>
                <button>Create Match the Following Game</button>
        </Link>
        <Link class = 'card'  to = '/create-mcq'>
                <div class='card-img'>
                  <img src="assets/KBC.jpg" alt="MCQ"/>
                </div>
                <button>Create Multiple Choice Question Game</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;