import './App.css';
import { useState, useId } from 'react';

let explorer = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'index.html',
          isFolder: false,
        },
        {
          name: 'manifest.json',
          isFolder: false,
        }
      ]
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'assets',
          isFolder: true,
          items: [
            {
              name: 'banner.jpeg',
              isFolder: false,
            }
          ]
        },
        {
          name: 'index.js',
          isFolder: false,
        },
        {
          name: 'index.css',
          isFolder: false,
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Folder explorer={explorer} />
      </div>
      <div className='main' style={{color: 'crimson',}}>
        Files Open Here
      </div>
    </div>
  );
}

export default App;


 function Folder(props) {

  let { explorer } = props;
  
  const [showChilds, setShowChilds] = useState(explorer.name === 'root' ? true : false);

  return (
    explorer.isFolder ?
    <div className='folder'>
      <div className='parent' onClick={() => { setShowChilds(!showChilds) }}>
        {explorer.name}
      </div>
      {
        showChilds &&
        <div className='childs'>
          {
            explorer.items.map((item, i) => (
              <Folder explorer={item} key={`${explorer.name}-${i}`} />
            ))
          }
        </div>
      }
    </div>
    :
    <div className='parent'>{explorer.name}</div>
  );

 }