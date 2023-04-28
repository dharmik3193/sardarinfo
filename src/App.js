import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('')

  let x = setInterval(function () {

    let now = new Date()
    let year = 2024
    let month = now.getMonth()
    if (month === 0) {
      year = now.getFullYear() + 1;
    }


    let comingDate = new Date(`${month + 1} 31, ${year} 13:12:00`)
    // let now = new Date()
    let selisih = comingDate.getTime() - now.getTime()

    setDays(Math.floor(selisih / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    setMinutes(Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)))
    setSeconds(Math.floor(selisih % (1000 * 60) / 1000))

    if (selisih < 0) {
      clearInterval(x)
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }


  }, 1000)

  const formhandler = (e) => {
    setEmail(e.target.value)
    if (e.target.value === '') {
      setAlert("* This is required field")
    } else if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      setAlert("Email Must Contain @ and .")
    } else {
      setAlert("")
    }

  }

  const reset = () => {
    setEmail("")
  }

  var loadScript = function (src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }

  useEffect(() => {
    loadScript('js/jquery.min.js')
    loadScript('js/bootstrap.min.js')
    // loadScript('js/jquery.countdown.min.js')
    loadScript('js/jquery.animatedheadline.min.js')
    loadScript('js/pace.min.js')
    loadScript('js/main.js')
  }, [])

  return (
    <div id="wrapper" className="wrapper">
      <div className="fxt-template-default fxt-template-layout5">
        {/* Background Element Area Start Here */}
        <ul className="fxt-bg-element">
          <li className="top-right fxt-transformX-100 fxt-transition-delay-2">
            <img src="img/figure/shape2.png" alt="Shape" />
          </li>
          <li className="bottom-left fxt-transformX--100 fxt-transition-delay-2">
            <img src="img/figure/shape1.png" alt="Shape" />
          </li>
        </ul>
        {/* Background Element Area End Here */}
        {/* Logo Area Start Here */}
        <div className="fxt-logo fxt-logo-layout5 fxt-absolute-box fxt-box-top-left">
          <div className="fxt-transformX--100 fxt-transition-delay-12">
            <img src="img/dark-logo.png" alt="Sardar Infotech" title='Sardar Infotech'/>
          </div>
        </div>
        {/* Logo Area End Here */}
        {/* Page Content Area Start Here */}
        <div className="fxt-content-box fxt-content-box-layout5 fxt-absolute-box fxt-box-center-center">
          <div
            className="ah-animate"
            data-line-options='{"animationType": "rotate-2", "animationDelay": 3000 }'
          >
            <div className="ah-headline item-title-thin fxt-transformY-100 fxt-transition-delay-12">
              <span className="fixed-text">We Are </span>
              <span className="animate-text ah-words-wrapper">
                <b className="is-visible"> Building...</b>
                <b> Thinking...</b>
                <b> Creating...</b>
              </span>
            </div>
          </div>
          <h1 className="item-title fxt-transformY-100 fxt-transition-delay-14">
            Something Awesome
          </h1>
          <div className="countdown-layout2 fxt-transformY-100 fxt-transition-delay-16">
            <div class="countdown">
              <div class="countdown-section">
                <div>
                  <div class="countdown-number">{days}</div>{console.log(days)}
                  <div class="countdown-unit">Days</div>
                </div>
              </div>
              <div class="countdown-section">
                <div>
                  <div class="countdown-number">{hours}</div>
                  <div class="countdown-unit">Hours</div>
                </div>
              </div>
              <div class="countdown-section">
                <div>
                  <div class="countdown-number">{minutes}</div>
                  <div class="countdown-unit">Minutes</div>
                </div>
              </div>
              <div class="countdown-section">
                <div>
                  <div class="countdown-number">{seconds}</div>
                  <div class="countdown-unit">Second</div>
                </div>
              </div>
            </div>
          </div>
          <p className="fxt-transformY-100 fxt-transition-delay-18">
            Perfect and awesome template to present your future product or service.
            Hooking audience attention is all in the opener. Perfect and awesome
            template to your future.
          </p>
          <div className="fxt-subscribe-layout2 fxt-transformY-100 fxt-transition-delay-20">
            <div className="form-title">Let’s notify you when we are up</div>
            <form
              action="http://affixtheme.com/html/flafy/flafy/vendor/php/subscribe.php"
              className="subscribe-form"
              method="POST"
              data-pixsaas="newsletter-subscribe"
            >
              <div className="input-group stylish-input-group">
                <div className="item-icon">
                  <i className="fas fa-envelope" />
                </div>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="newsletter-form-email"
                  placeholder="Enter your Email"
                  required=""
                />
                <span className="input-group-addon">
                  <button
                    type="submit"
                    className="fxt-btn fxt-btn-fill fxt-btn-layout2"
                  >
                    NOTIFY ME
                  </button>
                </span>
              </div>
              <div className="clearfix" />
              <div className="form-result alert">
                <div className="content" />
              </div>
            </form>
          </div>
        </div>
        {/* Page Content Area End Here */}
        {/* Social Area Start Here */}
        <div className="fxt-social fxt-social-layout5 fxt-absolute-box fxt-box-bottom-right">
          <ul className="fxt-social-items fxt-items-dark">
            <li className="fxt-facebook fxt-transformX-100 fxt-transition-delay-21">
              <a href="#" title="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="fxt-twitter fxt-transformX-100 fxt-transition-delay-22">
              <a href="#" title="twitter">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="fxt-google fxt-transformX-100 fxt-transition-delay-23">
              <a href="#" title="google">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li className="fxt-instagram fxt-transformX-100 fxt-transition-delay-24">
              <a href="#" title="instagram">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="fxt-linkedin fxt-transformX-100 fxt-transition-delay-25">
              <a href="#" title="linkedin">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="fxt-youtube fxt-transformX-100 fxt-transition-delay-26">
              <a href="#" title="youtube">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        {/* Social Area End Here */}
      </div>
    </div>

  );
}

export default App;
