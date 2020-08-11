import React from 'react';
import './static/css/style.css';
import Header from "./components/Header";
import Content from "./components/Content"

const LINKS = [
    {linkURL: 'http://www.naver.com', name: 'naver', imageURL: '/images/icons/vaccine.svg', description: '네이버'},
    {linkURL: 'http://www.naver.com', name: 'naver', imageURL: '', description: '네이버'},
    {linkURL: 'http://www.naver.com', name: 'naver', imageURL: '', description: '네이버'},
    {linkURL: 'http://www.naver.com', name: 'naver', imageURL: '', description: '네이버'}
]
function App() {
    return (
        <div className="container">
            <Header/>
            <Content links={LINKS}/>
        </div>
    );
}

export default App;
