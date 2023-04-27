import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  var loadScript = function (src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }

  useEffect(() => {
    loadScript('js/jquery.min.js')
    loadScript('js/bootstrap.min.js')
    loadScript('js/jquery.countdown.min.js')
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
            <img src="img/figure/shape2.png" alt="Shap" />
          </li>
          <li className="bottom-left fxt-transformX--100 fxt-transition-delay-2">
            <img src="img/figure/shape1.png" alt="Shap" />
          </li>
        </ul>
        {/* Background Element Area End Here */}
        {/* Logo Area Start Here */}
        <div className="fxt-logo fxt-logo-layout5 fxt-absolute-box fxt-box-top-left">
          <div className="fxt-transformX--100 fxt-transition-delay-12">
            <img src="img/dark-logo.png" alt="logo" />
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
              <span className="fixed-text">We Are</span>
              <span className="animate-text ah-words-wrapper">
                <b className="is-visible">Building...</b>
                <b>Construction...</b>
                <b>Kitchen Cabinate...</b>
              </span>
            </div>
          </div>
          <h1 className="item-title fxt-transformY-100 fxt-transition-delay-14">
            Something Awesome
          </h1>
          <div className="countdown-layout2 fxt-transformY-100 fxt-transition-delay-16">
            <div className="countdown" />
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
