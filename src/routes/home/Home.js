/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.less';
import Spinner from '../../components/Spinner/Spinner';
import texts from './resource/textContents';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  getContent = () => (
    <div>
      {this.getNaviBar()}
      {this.getText()}
    </div>
  );

  getNaviBar = () => {
    const bkgStyle = {
      backgroundImage: 'url(/images/background.jpg)',
      backgroundColor: '#e6b400',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };
    return (
      <div className={s.naviBar} style={bkgStyle}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>Richpedia</h1>
          <div className={s.subTitle}>
            A Comprehensive Multi-modal Knowledge Graph.
          </div>
        </div>
        <div>{this.getNavi()}</div>
      </div>
    );
  };

  getNavi = () => (
    <div className={s.navi}>
      <div>
        <a href="#introduction">Introduction</a>
      </div>
      <div>
        <a href="#download">Download</a>
      </div>
      <div>
        <a href="/dataset">Online Query</a>
      </div>
      <div>
        <a href="/tutorial">Tutorial</a>
      </div>
      <div>
        <a href="/ontology">Ontology</a>
      </div>
      <div>
        <a href="/resource">Resource</a>
      </div>
      <div>
        <a href="https://github.com/wangmengsd/richpedia" target="__blank">
          View On Github
        </a>
      </div>
    </div>
  );

  getParagraph = (title, anchor, text, index) => (
    <div className={s.paraContainer} key={index}>
      <h2 id={anchor} className={s.paraTitle}>
        {title}
      </h2>
      <div className={s.paraText}>{text}</div>
    </div>
  );

  getText = () => {
    const paraList = [];
    texts.map((item, index) =>
      paraList.push(
        this.getParagraph(item.title, item.anchor, item.text, index),
      ),
    );
    return <div className={s.textContainer}>{paraList}</div>;
  };

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Home);
