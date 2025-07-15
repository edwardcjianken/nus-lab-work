import Profile from "./Profile/Profile";

function App() {
  const people = [
    {
      id: 1797,
      first_name: "Ernestina",
      last_name: "Bailey",
      email: "ernestina.bailey@email.com",
      avatar: "https://robohash.org/nesciuntvoluptatemnon.png",
      phone_number: "+423 (348) 422-0511 x73822",
      date_of_birth: "1976-10-09",
      employment: {
        title: "National Manufacturing Specialist",
        key_skill: "Work under pressure",
      },
    },
    {
      id: 1798,
      first_name: "Ernest",
      last_name: "Goo",
      email: "ernest.goo@email.com",
      avatar: "https://robohash.org/nesciuntvoluptatemnon.png",
      phone_number: "+423 (348) 422-0511 x73822",
      date_of_birth: "1976-10-09",
      employment: {
        title: "National Manufacturing Specialist",
        key_skill: "Work under pressure",
      },
    },
    {
      id: 1799,
      first_name: "Eddie",
      last_name: "Boo",
      email: "eddie.boo@email.com",
      avatar: "https://robohash.org/nesciuntvoluptatemnon.png",
      phone_number: "+423 (348) 422-0511 x73822",
      date_of_birth: "1976-10-09",
      employment: {
        title: "National Manufacturing Specialist",
        key_skill: "Work under pressure",
      },
    },
  ];

  return (
    <div>
      {people.map((person) => {
        return <Profile key={person.id} user={person} />;
      })}
    </div>
  );
}

export default App;
