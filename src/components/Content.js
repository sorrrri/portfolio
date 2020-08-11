import React from "react";

class Link extends React.Component {
    render() {
        const link = this.props.link
        const linkURL = this.props.linkURL
        const name = link.name
        const imageURL = link.imageURL
        const description = link.description

        return (
            <li className="project" data-groups='[]' data-title="">
                <a href={linkURL} target="_blank">
                    <h4 className="project-title">{name}</h4>
                    <img src={imageURL}/>
                    <div className="project-description">{description}</div>
                </a>
            </li>
        );
    }
}

class Links extends React.Component {
    render() {
        const item = []

        this.props.links.forEach((link) => {
            item.push(
                <Link
                    link={link}
                    linkURL={link.linkURL}
                    name={link.name}
                    imageURL={link.imageURL}
                    descript={link.description}/>
            )
        });

        return (
            <section>
                <ul id="grid" className="projects">
                    {item}
                </ul>
            </section>
        )
    }
}

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
                <Links links={this.props.links}/>
            </div>
        )
    }

}

export default Content