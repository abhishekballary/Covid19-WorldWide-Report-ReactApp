(this["webpackJsonpcovid-reactapp"]=this["webpackJsonpcovid-reactapp"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/spinner.1c348a92.gif"},19:function(e,t,a){e.exports=a(44)},2:function(e,t,a){e.exports=a.p+"static/media/covid-virus.ed4e6f68.png"},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=(a(24),a(3)),s=a(4),i=a(6),m=a(5),u=(a(25),a(17)),y=a.n(u),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={cont:"",spin:""},e.CountryHandler=function(){var t=e.props.options.Countries.find((function(t){return t.Country===e.state.cont}));e.setState({spin:o.a.createElement("img",{src:y.a,className:"spinner"})}),setTimeout((function(){e.setState({spin:""}),e.props.selectCountry(t)}),3e3)},e.handleSelectCountry=function(t){e.setState({cont:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props.options;return e=t.Countries?t.Countries.map((function(e,t){return o.a.createElement("option",{key:t},e.Country)})):null,o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"date"},t.Date?t.Date.slice(0,10):""),o.a.createElement("select",{className:"select",onChange:this.handleSelectCountry},o.a.createElement("option",null,"--Select--"),e),o.a.createElement("button",{onClick:this.CountryHandler,className:"sub"},"Search"),o.a.createElement("br",null),this.state.spin)}}]),a}(n.Component),d=(a(26),a(2)),h=a.n(d);var C=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("h1",null,"Global Report"),o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"col-4 newCase"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"New Cases"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.globalReport.Global?e.globalReport.Global.NewConfirmed:"")),o.a.createElement("div",{className:"col-4 totalCase"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"Total Cases"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.globalReport.Global?e.globalReport.Global.TotalConfirmed:"")),o.a.createElement("div",{className:"col-4 totalDeath"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"Total Death"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.globalReport.Global?e.globalReport.Global.TotalDeaths:""))),o.a.createElement("h1",null," Country Report  ",e.byCountryData?e.byCountryData.Country:""),o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"col-4 CountryCase"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"New Cases"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.byCountryData?e.byCountryData.NewConfirmed:"")),o.a.createElement("div",{className:"col-4 CountrytotalCase"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"Total Cases"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.byCountryData?e.byCountryData.TotalConfirmed:"")),o.a.createElement("div",{className:"col-4 CountrytotalDeath"},o.a.createElement("img",{src:h.a,className:"img"}),o.a.createElement("h2",null,"Total Death"),o.a.createElement("div",{style:{fontSize:"2rem",marginBottom:"0.8rem"}},e.byCountryData?e.byCountryData.TotalDeaths:""))))},v=a(18),E=a.n(v),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={covid19Data:{},byCoutries:{},testing:""},e.selectCountry=function(t){e.setState({byCoutries:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E()("https://api.covid19api.com/summary").then((function(t){e.setState({covid19Data:t.data})}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",textAlign:"center"}},o.a.createElement(p,{options:this.state.covid19Data,selectCountry:this.selectCountry}),o.a.createElement(C,{globalReport:this.state.covid19Data,byCountryData:this.state.byCoutries}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7eb2c386.chunk.js.map