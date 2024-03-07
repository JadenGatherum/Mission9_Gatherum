// Importing the React library, which is necessary for creating React components
import React from 'react';

// Importing CSS styles for the App component
import './App.css';

// Importing JSON data from a file named CollegeBasketballTeams.json
import jsonData from './CollegeBasketballTeams.json';

// Declaring a constant variable named teams and assigning it the type of TeamProps array,
// and initializing it with the 'teams' array from the imported JSON data
const teams: TeamProps[] = jsonData.teams;

// Defining the structure of each team object using an interface named TeamProps
interface TeamProps {
  tid: number; // Team ID
  cid: number; // Conference ID
  did: number; // Division ID
  school: string; // School name
  name: string; // Team name
  abbrev: string; // Team abbreviation
  pop: number; // Population
  city: string; // City
  state: string; // State
  latitude: number; // Latitude
  longitude: number; // Longitude
}

// Functional component to display a welcome message
function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

// Class-based component to render individual team details
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h4>{oneTeam.name}</h4>
        <h4>{oneTeam.state}</h4>
      </div>
    );
  }
}

// Functional component to render a list of teams
function TeamList() {
  return (
    <div>
      {/* Mapping over the 'teams' array and rendering a Team component for each team object */}
      {teams.map((team) => (
        <Team {...team} key={team.tid} />
      ))}
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      {/* Rendering the Welcome component */}
      <Welcome />
      {/* Rendering the TeamList component to display the list of teams */}
      <TeamList />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
