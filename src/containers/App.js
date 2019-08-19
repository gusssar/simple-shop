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
      data, 
      isInit,
      filterById,
      amountItem,

      LoadAllListAction,
      FilterByIdAction,
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
              filterById={filterById}
              />
            <List 
              isInit={isInit}
              data={data}
              LoadAllList={LoadAllListAction}
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
    LoadAllListAction: () => dispatch(NeedGetRequest()),
    FilterByIdAction: (id) => dispatch(FilterById(id)),
    ChangeCountAction: (obj) => dispatch(ChangeCount(obj)),
    SndReqestAction: (obj) => dispatch(NeedSndReqest(obj)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
