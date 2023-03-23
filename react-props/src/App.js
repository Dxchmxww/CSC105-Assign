import Card from "./component/Card";
import List from "./component/List";
import TypeMe from "./component/TypeMe";

function App() {
  // const user = {
  //   name: 'Name: Wannarath T.',
  //   job: 'Job: Student',
  //   hobby: 'Hobby: Reading nevel'
  // };

  const user = [
    { name: 'Name: Wannarath T.',
      job: 'Job: Student',
      hobby: 'Hobby: Reading nevel' 
    },
    { name: 'Name: Wannaruay T.',
      job: 'Job: Student',
      hobby: 'Hobby: Listen to music' 
    },
    { name: 'Name: Wannarun T.',
      job: 'Job: Student',
      hobby: 'Hobby: Watch movie' 
    }
  ]

  return (
    <div className="App">
      <List user={user} />
      <TypeMe />
    </div>
  );
}

export default App;
