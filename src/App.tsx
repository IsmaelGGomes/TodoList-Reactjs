import { useState } from 'react';
import * as C from './App.styles';
import type { Item } from './types/item';
import { ListItem } from './components/Listitem/';
import { AddArea } from './components/AddArea/';

const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id:1, name:'indo ali', done:false},
    { id:2, name:'indo ali mas em outro lugar', done:false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setlist(newlist);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;