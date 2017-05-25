import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import './styles/app.less';

const App = function App() {
    return (
        <div className='app'>
            <Header />
            <Content />
            <Sidebar />
        </div>
    );
};

export default App;
