import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';

const App = function App() {
    return (
        <div>
            <Header />
            <Content />
            <Sidebar />
        </div>
    );
};

export default App;
