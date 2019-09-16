/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Pagination } from 'antd';
import s from './Resource.less';
import Spinner from '../../components/Spinner/Spinner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  onPageChange = newPage => {
    this.setState({
      currentPage: newPage,
    });
  };

  getList = pageNo => {
    const start = (pageNo - 1) * 500;
    const end = pageNo < 72 ? pageNo * 500 : 35529;
    const list = [];

    for (let i = start; i < end; i += 1) {
      list.push({
        name: `image${i}`,
        url: `resource/${i}.jpg`,
      });
    }
    return list;
  };

  getDisplayList = list =>
    list.map(item => (
      <div key={item.name} className={s.itemContainer}>
        <span className={s.image}>{item.name}</span>
        <span>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {`http://rich.wangmengsd.com/${item.url}`}
          </a>
        </span>
      </div>
    ));

  getContent = () => (
    <div>
      <HeaderMenu />
      <div className={s.root}>
        <h1 className={s.title}>Resource</h1>
        <div className={s.listContainer}>
          <div className={s.tableHead}>
            <span className={s.image}>Image</span>
            <span>Image Url</span>
          </div>
          {this.getDisplayList(this.getList(this.state.currentPage))}
        </div>
        <Pagination
          total={35529}
          current={this.state.currentPage}
          defaultPageSize={500}
          onChange={this.onPageChange}
        />
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Resource);
