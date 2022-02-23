import React from "react";

export default class App extends React.Component {
  state = {
    otp: "",
  };

  componentDidMount() {
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
<script id="ionAdTagScript" src="//cdn.torcai.com/tags/js/ionadtag.js?dm=www.drramakce.com&pageUrl=www.drramekce.com&adUnit=Test_ATF" async></script>
        </div>
      </div>
    );
  }
}
