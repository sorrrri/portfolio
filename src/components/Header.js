import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search">
                <svg x="0px" y="0px" viewBox="0 0 24 24" width="20px" height="20px">
                    <g strokeLinecap="square" strokeLinejoin="miter" stroke="currentColor">
                        <line fill="none" strokeMiterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4"/>
                        <circle fill="none" stroke="currentColor" strokeMiterlimit="10" cx="10" cy="10" r="9"/>
                    </g>
                </svg>
                <label htmlFor="search-input">Search</label>
                <input className="js-shuffle-search" type="search" id="search-input" placeholder="project name ..."/>
            </div>
        )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="cog">
                <a href="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                    </svg>
                </a>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <SearchBar/>
                <Navigation/>
            </header>
        )
    }
}

export default Header