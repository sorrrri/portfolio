import React from "react";

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

                <section>
                    <ul id="grid" className="projects">
                        <li className="project" data-groups='[]' data-title="">
                            <a href="" target="_blank">
                                <h4 className="project-title">test</h4>
                                <img src="" />
                                <div className="project-description">test desc</div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }

}

export default Content