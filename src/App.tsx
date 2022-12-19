import { useState } from 'react';
import * as C from './App.styles';
import type { Item } from './types/Item';

const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id:1, name:'indo ali', done:false},
    { id:2, name:'indo ali mas em outro lugar', done:false},
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de tarefas</C.Header>
        { /* área para adicionar item */}

        {list.map((item, index)=>(
          <div className="">{item.name}</div>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;