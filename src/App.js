import React, { Component } from 'react';
import SearchBar from './Component/SearchBar/SearchBar'
import ContentDiv from './Component/ReportContentDiv/ContentDiv'
import Axios from 'axios'


export default class App extends Component{

  state={
     covid19Data:{},
     byCoutries:{},
     testing:""
  }

  componentDidMount(){
    Axios('https://api.covid19api.com/summary')
    .then(response=>{
      this.setState({covid19Data:response.data})
    })

  }

  selectCountry=(country)=>{
    this.setState({byCoutries:country})
  }
  
  
  render(){
    return <div style={{width:'100%',textAlign:'center'}}>
      
    <SearchBar options={this.state.covid19Data} selectCountry={this.selectCountry}/>

    <ContentDiv  globalReport={this.state.covid19Data} byCountryData={this.state.byCoutries}/>
    
    </div>
    
  }
}
