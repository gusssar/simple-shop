import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header/index';
import { List } from '../components/List/index';
import { SideBarFilter } from '../components/SideBar/index';

import { NeedGetRequest, FilterById } from '../actions/DataListActions'

import './App.css';

class App extends React.Component{

  render(){
    const { 
      isInit,
      data, 
      value,
      viewLine,
      filter,
      LoadAllListAction,
      NextPageAction,
      filterById,
      FilterByIdAction,
    } = this.props;
 
    return(
      <div className='app'>
          <Header Load={LoadAllListAction} />
          <div className='app__content'>
          <SideBarFilter 
            isInit={isInit}
            data={data}
            FilterById={FilterByIdAction}
            />
          <List 
            isInit={isInit}
            data={data}
            value={value}
            keyCheck = {filter}
            viewLine={viewLine}
            LoadAllList={LoadAllListAction}
            NextPage={NextPageAction}
            filterById={filterById}
            />
          </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.data,
    isInit: store.data.isInit,
    filterById: store.data.filterById,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    LoadAllListAction: (start, end) => dispatch(NeedGetRequest(start, end)),
    FilterByIdAction: (id) => dispatch(FilterById(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
