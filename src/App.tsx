import { useState } from 'react';
import './App.css';
import * as Plugin from './build/woodDeck.es.js';

function App() {
  const { ObjectModel, PluginDnd, PanelView, PlugInDialog } = Plugin;

  const [data, setData] = useState();

  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <PlugInDialog.RectangleModelDialog
        title='Rectangle Model'
        subTitle='Create a rectangle model'
        isOpen={open}
        onClose={() => {}}
        onFinish={(values) => {
          setData(values);
        }}
      />
      <PluginDnd.DndContext>
        <PanelView />
        <ObjectModel
          onDrop={(item, json) => {
            console.log(item, json);
            setOpen(true);
          }}
          wdData={data}
        />
      </PluginDnd.DndContext>
    </div>
  );
}

export default App;

