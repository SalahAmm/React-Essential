import {useState} from 'react'
import Goal from "./Components/Goal.tsx"
import goalsimage from "./assets/goals.jpg"
import Header from "./Components/Header.tsx"

export default function App() {

  type CourseGoal = {
    title: string;
    description: string;
    id: number;
  }

  const[goals , setGoal] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoal((prevGoal) => {
      const addGoal: CourseGoal = {
        title : 'Learn React',
        description: 'With basic of react you can build many things',
        id: Math.random(),

      };
      return [...prevGoal , addGoal ]
    });
    
  }


  return (
    <>
    <main>
      <Header image={{src: goalsimage , alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal} >Add Goal</button>
      <ul>
        {goals.map((goal) => {
          return (
            <ul>
              <li key= {goal.id}>
                <Goal title={goal.title}>
                  <p>{goal.description}</p>
                </Goal>
              </li>
            </ul>
          )
        })}
      </ul>
      
    </main>
    </>
  )
}
