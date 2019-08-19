import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header/index';
import { List } from '../components/List/index';
import { SideBarFilter } from '../components/SideBar/index';

import { NeedGetRequest, FilterById, ChangeCount, NeedSndReqest } from '../actions/DataListActions'

import './App.css';
import { Footer } from '../components/Footer';

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
      amountItem,
      ChangeCountAction,
      SndReqestAction,
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
            ChangeCount={ChangeCountAction}
            amountItem={amountItem}
            />
          </div>
          <Footer
            amountItem={amountItem}
            SndReqest={SndReqestAction}
            />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.data,
    isInit: store.data.isInit,
    filterById: store.data.filterById,
    amountItem: store.data.product,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    LoadAllListAction: (start, end) => dispatch(NeedGetRequest(start, end)),
    FilterByIdAction: (id) => dispatch(FilterById(id)),
    ChangeCountAction: (obj) => dispatch(ChangeCount(obj)),
    SndReqestAction: (obj) => dispatch(NeedSndReqest(obj)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
