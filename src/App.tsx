import React from 'react';
import MyAppBar from './components/appbar';
import Content from './components/content';


const App = () => {
  const [tab, setTab] = React.useState<number>(0);
  return (
    <>
      <MyAppBar tab={tab} onTabChange={tab => setTab(tab)} />
      <Content tab={tab} />
    </>
  );
}

export default App;