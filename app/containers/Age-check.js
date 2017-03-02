import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

class AgeCheck extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {isToggleOn: true};
    this.handleClick = this.shareYoti.bind(this)
  }

  shareYoti () {
    'use strict'
    var qrBtn = document.getElementById('yotiBtn'),
      qrCode = document.querySelector('.qr-code-output'),
      scanMe = document.querySelector('.scan-me'),
      appId = '3392788e-e529-4309-8ed7-54d7ac554055',
      scenId = '5be10ae7-af29-40b0-8d33-a0fb90cb0e88'

    var getQR = function () {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', function (e) {
        var responseObj = JSON.parse(e.target.responseText)
        displayQr(responseObj)
        listenForToken(responseObj.proto, responseObj.url)
      })
      xhr.open('GET', '/qr')
      xhr.send()
    }

    var displayQr = function (responseObj) {
      qrBtn.style.display = 'none'
      scanMe.style.display = 'block'
      qrCode.innerHTML = responseObj.svg
      qrCode.style.textAlign = 'center'
    }

    var listenForToken= function(proto, url) {
      var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto;
      var socket = new WebSocket(host);
      socket.onopen = function () {
        socket.send(JSON.stringify({subscription: proto}));
      };
      socket.onmessage = function (msg) {
        var data = JSON.parse(msg.data);
        switch (data.status) {
          case 'COMPLETED' : {
            //Callback URL (with token)
            window.location = 'thankyou?token=' + data.token;
          }
        }
      };
    };

    var t = {
      config: {
        service: "https://www.yoti.com/connect/",
        qr: "https://www.yoti.com/qr/"
      }
    },
    i = function(e) {
      t.serviceRedirectTimeout && clearTimeout(t.serviceRedirectTimeout);
      var n = Date.now(),
        r = 5e3;
      t.serviceRedirectTimeout = setTimeout(function() {
        var e = Date.now();
        r + 1e3 > e - (n + r) && (window.location = t.config.service + appId)
      }, r)
     },
    n = function(t) {
        /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) && i(t.currentTarget)
    },
    //Function only fires only in mobile
    mobileSetup = function(e, i, n) {
     var r = 'https://www.yoti.com/qr/' + i,
       o = new XMLHttpRequest;
       o.onreadystatechange = function() {
       if (o.readyState === XMLHttpRequest.DONE && 200 === o.status) {
         var t = JSON.parse(o.responseText);
         e.href = t.qrcodeUrl + "?callback=" + t.callbackUrl + "&id=" + t.application.id + "&mobile=" + JSON.stringify(!!n)
       }
     }, o.open("GET", r, !0),
     o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
     o.setRequestHeader("content-type", "application/json"),
     o.send(null)
   },
    r = function(e, i) {
      e.preventDefault();
      var n = new XMLHttpRequest,
        r = e.currentTarget,
        o = i || 'https://www.yoti.com/qr/' + scenId;
      n.onreadystatechange = function() {
        n.readyState === XMLHttpRequest.DONE && 200 === n.status && s(n.response, r, i)
      }, n.open("GET", o, !0), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(null)
    }

    t.init = function(i) {
      for (var s in i) t.config.hasOwnProperty(s) && (t.config[s] = i[s]);
      // g gets the href set in o function - this will fire off need to add event listener
      var g = qrBtn,
      v = t.config.service + appId;
      var b;
      //HERE WE CHECK IF WE ARE ON A MOBILE OR NOT!
      /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) ? (b = "_self", mobileSetup(g, scenId, !0)) : (v = "javascript:void(0)", n = getQR);
      g.setAttribute("target", b),
      g.setAttribute("href", t.config.service + appId),
      g.setAttribute("data-application-id", appId),
      g.setAttribute("data-scenario-id", scenId),
      g.addEventListener("click", n);
    }
    t.config.service = 'https://code.yoti.com/app/'
    t.init()
  }

  // componentDidMount() {
  //
  // }

  render () {
    return (
      <div>
        <div className='age-title'>
          <h1 className='title'>ARE YOU UNDER 18?</h1>
        </div>

        <div className='age-responsive'>
          <div className='age-info background-blue'>
            <p className='why-eighteen'>
               To remove explicit online content we will only ask for your age. Not even your name! You must be under 18 years old.
              <a className='link text-blue' href='https://www.iwf.org.uk/what-we-do' target='_blank'>
                 Find out why here
                 <i className='tiny material-icons'>info_outline</i>
              </a>
            </p>
          </div>

          <div className='age-info'>
            <i className='age-page small material-icons'>info_outline</i>
            <a className='link text-white' href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
              What can I do if I am over 17?
            </a>
          </div>
        </div>

        <div className='yoti-info '>
          <div className='qr-code-output' id='yoti-info__content'>
            <div className='yoti-intro'>
              <h3>YOTI - CONFIDENTIALLY VERIFY YOUR AGE</h3>
              <img src='imgs/yoti-logo.svg' alt='yoti logo' />
            </div>
            <p className='yoti-description'>
              Yoti empowers you to take back control over your identity. If you don't have a Yoti digital identity, please create one <a className='link' href='yoti'>here</a> and use it to verify you are under 17.
            </p>
          </div>
          <p className='scan-me'>
            SCAN ME WITH YOTI
            <img src='imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
          </p>
        </div>

        <span className='yoti-btn' id='yotiBtn'>
          <a
            onClick={this.shareYoti}
            className='btn yoti-connect learn-more btn-primary'
            data-target='embed'
            data-yoti-scenario-id
            data-yoti-application-id
            data-yoti-type='inline'
            data-size='medium'>
            Share your age using Yoti
          </a>
        </span>

        <Link to='/form'>
          <p>Take me to form</p>
        </Link>
      </div>
    )
  }
}

export default AgeCheck
