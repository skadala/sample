import React from "react";

export default class App extends React.Component {
  state = {
    otp: "",
  };

  componentDidMount() {
    const s = document.createElement('script');
//       s.type = 'text/javascript';
//       s.id="AV62063c7d977bcd0ce57a7ac9"
//       s.src='https://tg1.aniview.com/api/adserver/spt?AV_TAGID=62063c7d977bcd0ce57a7ac9&AV_PUBLISHERID=5fe07fe623406812b82d078c'
//       s.async = true;
//       // s.innerHTML = "adserver.display('Test_ATF');";
//       this.instance.appendChild(s)
//     const s1 = document.createElement('script');
//       s1.type = 'text/javascript';
// //       s1.id="AV62063c7d977bcd0ce57a7ac9"
// //       s1.src='https://tg1.aniview.com/api/adserver/spt?AV_TAGID=62063c7d977bcd0ce57a7ac9&AV_PUBLISHERID=5fe07fe623406812b82d078c'
//       s1.async = false;
//        s1.innerHTML = "adserver.display('Test_ATF');";
//       this.instance.appendChild(s1)
     const s2 = document.createElement('script');
      s2.type = 'text/javascript';
      s1.id="ionAdTagScript"
      s2.src='//cdn.torcai.com/tags/js/ionadtag.js?dm=www.drramakce.com&pageUrl=www.drramekce.com&adUnit=Test_ATF'
      s2.async = true;
//        s1.innerHTML = "adserver.display('Test_ATF');";
      this.instance2.appendChild(s1)
    
  }

  render() {
    return (
      <div className="App">
        
        <div>
//           <div id='Test_ATF' ><script>adserver.display('Test_ATF');</script></div>
            
          
//           <div id='Test_ATF' ref={el => (this.instance = el)} style={{height:"100"}}/> 
          <div id='Test_ATF' ref={el => (this.instance2 = el)} style={{height:"100"}}/> 
          
// <script id="ionAdTagScript" src="//cdn.torcai.com/tags/js/ionadtag.js?dm=www.drramakce.com&pageUrl=www.drramekce.com&adUnit=Test_ATF" async></script>
        </div>
      </div>
    );
  }
}
