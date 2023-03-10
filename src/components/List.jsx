import { people } from '../data';

import Person from './Person';

const List = () => {
  return (
    <div className='container mx-auto'>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;