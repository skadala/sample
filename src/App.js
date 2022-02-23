import React from "react";

export default class App extends React.Component {
  state = {
    otp: "",
  };

  componentDidMount() {
    const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id="AV62063c7d977bcd0ce57a7ac9"
      s.src='https://tg1.aniview.com/api/adserver/spt?AV_TAGID=62063c7d977bcd0ce57a7ac9&AV_PUBLISHERID=5fe07fe623406812b82d078c'
      s.async = true;
      // s.innerHTML = "adserver.display('Test_ATF');";
      this.instance.appendChild(s)
    if ("OTPCredential" in window) {
      console.log("supported webotp")
      const ac = new AbortController();

      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          this.setState({ otp: otp.code });
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
    else{
      console.log("no support for webotp")
    }
  }

  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <h2>Your OTP is: {this.state.otp}</h2>
        <br />
        <br />
        <br />
        <br />
        <h3>The Web OTP API Docs</h3>
        <div>
          <div id='Test_ATF' ><script>adserver.display('Test_ATF');</script></div>
            
          Send an SMS that includes
          <div id='Test_ATF' ref={el => (this.instance = el)} style={{height:"100"}}/> 
          <pre>
            <code>@preprodportal.vodafoneplay.in #12345</code>
          </pre>
          at the last line to this phone.
          <pre>
            <code>please don't use https:// and / end of the url</code>
          </pre>
          <pre style={{ color: "green" }}>
            <code>example for use @www.google.com</code>
          </pre>
          <pre style={{ color: "red" }}>
            <code>example for not use XXXXX @https://www.google.com XXXXX</code>
          </pre>
<script id="ionAdTagScript" src="//cdn.torcai.com/tags/js/ionadtag.js?dm=satishkadala.netlify.app&pageUrl=satishkadala.netlify.app&adUnit=Test_ATF" async></script>
        </div>
      </div>
    );
  }
}
