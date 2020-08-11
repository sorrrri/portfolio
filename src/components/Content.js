import React from "react";

class Link extends React.Component {
    render() {
        const link = this.props.link
        const linkURL = this.props.linkURL
        const title = link.title
        const imageURL = link.imageURL
        const description = link.description

        return (
            <li className="link" data-groups='[]' data-title="">
                <a href={linkURL} target="_blank">
                    <h4 className="link-title">{title}</h4>
                    <img src={imageURL}/>
                    <div className="link-description">{description}</div>
                </a>
            </li>
        );
    }
}

class Links extends React.Component {
    render() {
        const filterText = this.props.filterText
        const items = []

        this.props.links.forEach((link) => {
            if (link.title.indexOf(filterText) === -1) {
                return
            }
            items.push(
                <Link
                    key={link.title}
                    link={link}
                    linkURL={link.linkURL}
                    title={link.title}
                    imageURL={link.imageURL}
                    descript={link.description}/>
            )
        });

        return (
            <section>
                <ul id="grid" className="links">
                    {items}
                </ul>
            </section>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

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
                <input
                    type="search"
                    id="search-input"
                    placeholder="project name ..."
                    value={this.props.filter}
                    onChange={this.handleFilterTextChange}/>
            </div>
        )
    }
}

class FilterableLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <Links
                    links={this.props.links}
                    filterText={this.state.filterText}/>
            </div>
        )
    }
}

const LINKS = [
    {linkURL: 'http://www.naver.com', title: 'apex', imageURL: '/images/icons/009-microorganisms.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'ns-db', imageURL: '/images/icons/012-report.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'vass', imageURL: '/images/icons/014-medical report.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'dqts', imageURL: '/images/icons/018-intellectual.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'mel', imageURL: '/images/icons/019-molecules.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'budon', imageURL: '/images/icons/036-laboratory.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'quicklinks', imageURL: '/images/icons/037-science book.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'naver', imageURL: '/images/icons/041-dna.png', description: '네이버'},
    {linkURL: 'http://www.naver.com', title: 'naver2', imageURL: '/images/icons/046-chemical.png', description: '네이버'}
]

class Content extends React.Component {
    render() {
        return (
            <div className="content">

                <h1>통합 메인 화면</h1>
                <nav className="category">
                    <ul className="filter-options">
                        <li className="active">all</li>
                        <li data-group="홈페이지">홈페이지</li>
                        <li data-group="데이터베이스">데이터베이스</li>
                        <li data-group="대시보드">대시보드</li>
                        <li data-group="임상서비스">임상서비스</li>
                    </ul>
                </nav>
                <FilterableLinks links={LINKS}/>
            </div>
        )
    }

}

export default Content