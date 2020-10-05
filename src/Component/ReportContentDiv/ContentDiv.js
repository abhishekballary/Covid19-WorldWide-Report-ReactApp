import React from 'react'
import '../ReportContentDiv/ContentDiv.css'
import img from '../../img/covid-virus.png'

function contentDiv(props){

    return(
        <div className='row'>
            <h1>Global Report</h1>
            <div className='col-12'>
                <div className='col-4 newCase'>
                    <img src={img} className='img'></img>
                    <h2>New Cases</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                        { props.globalReport.Global ? props.globalReport.Global.NewConfirmed : ''} 
                    </div>
                </div>

                <div className='col-4 totalCase'>
                    <img src={img} className='img'></img>
                    <h2>Total Cases</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                    { props.globalReport.Global ? props.globalReport.Global.TotalConfirmed : ''} 
                    </div>
                </div>

                <div className='col-4 totalDeath'>
                    <img src={img} className='img'></img>
                    <h2>Total Death</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                    { props.globalReport.Global ? props.globalReport.Global.TotalDeaths : ''}
                    </div>
                </div>

            </div>

          <h1> Country Report  { props.byCountryData ? props.byCountryData.Country :''}</h1>
            <div className='col-12'>
                <div className='col-4 CountryCase'>
                    <img src={img} className='img'></img>
                    <h2>New Cases</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                        { props.byCountryData ? props.byCountryData.NewConfirmed : ''}
                        </div>
                </div>

                <div className='col-4 CountrytotalCase'>
                    <img src={img} className='img'></img>
                    <h2>Total Cases</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                    { props.byCountryData ? props.byCountryData.TotalConfirmed : ''}
                    </div>
                </div>

                <div className='col-4 CountrytotalDeath'>
                    <img src={img} className='img'></img>
                    <h2>Total Death</h2>
                    <div style={{fontSize:'2rem',marginBottom:'0.8rem'}}>
                    { props.byCountryData ? props.byCountryData.TotalDeaths : ''}
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default contentDiv