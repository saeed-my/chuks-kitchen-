import { useState } from "react";
import "./Auth.css";

export function Login({ setScreen }) {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="auth-page">
      {/* Left — food image with overlay */}
      <div className="auth-left">
        <div className="auth-left-img">
          <img src="/login.png" alt="food" />
          <div className="auth-left-overlay" />
        </div>
        <div className="auth-left-content">
          <h2>Chuks Kitchen</h2>
          <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favourite today!</p>
        </div>
      </div>

      {/* Right — form */}
      <div className="auth-right">
        <div className="auth-form-wrap">
          <div className="auth-logo">Chuks Kitchen</div>
          <h3>Login your Account</h3>

          <div className="form-group">
            <label className="input-label">Email or phone number</label>
            <div className="input-wrap">
              <span className="input-icon">✉</span>
              <input type="email" className="input-field with-icon" placeholder="name@gmail.com" />
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Password</label>
            <div className="input-wrap">
              <span className="input-icon">🔒</span>
              <input
                type={showPwd ? "text" : "password"}
                className="input-field with-icon"
                placeholder="••••••••"
              />
              <button className="pwd-toggle" onClick={() => setShowPwd(p => !p)}>
                {showPwd ? "🙈" : "👁"}
              </button>
            </div>
            <button className="forgot-link">Forgot password?</button>
          </div>

          <button className="btn btn-orange btn-full" onClick={() => setScreen("home")}>Continue</button>
          <p className="auth-hint">Or continue with</p>

          <div className="divider"><hr /><span>or continue with</span><hr /></div>

          <button className="social-btn">
            <img src="https://www.google.com/favicon.ico" width={18} height={18} alt="google" />
            Continue with Google
          </button>
          <button className="social-btn">
            <span style={{color:"#1877F2",fontSize:18,fontWeight:700}}>f</span>
            Continue with Apple
          </button>

          <p className="auth-switch">
            Don't have an account?{" "}
            <button onClick={() => setScreen("register")}>Create Account</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Register({ setScreen }) {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  return (
    <div className="auth-page">
      {/* Left */}
      <div className="auth-left">
        <div className="auth-left-img">
          <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80" alt="food" />
          <div className="auth-left-overlay" />
        </div>
        <div className="auth-left-content">
          <h2>Chuks Kitchen</h2>
          <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favourite today!</p>
        </div>
      </div>

      {/* Right */}
      <div className="auth-right">
        <div className="auth-form-wrap">
          <div className="auth-logo">Chuks Kitchen</div>
          <h3>Create Your Account</h3>

          <div className="form-group">
            <label className="input-label">Email</label>
            <div className="input-wrap">
              <span className="input-icon">✉</span>
              <input type="email" className="input-field with-icon" placeholder="name@gmail.com" />
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Phone Number</label>
            <div className="input-wrap">
              <span className="input-icon">📞</span>
              <input type="tel" className="input-field with-icon" placeholder="+2341234000" />
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Password</label>
            <div className="input-wrap">
              <span className="input-icon">🔒</span>
              <input type={showPwd ? "text" : "password"} className="input-field with-icon" placeholder="QWERT34" />
              <button className="pwd-toggle" onClick={() => setShowPwd(p => !p)}>{showPwd ? "🙈" : "👁"}</button>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Confirm Password</label>
            <div className="input-wrap">
              <span className="input-icon">🔒</span>
              <input type={showPwd2 ? "text" : "password"} className="input-field with-icon" placeholder="QWERT234" />
              <button className="pwd-toggle" onClick={() => setShowPwd2(p => !p)}>{showPwd2 ? "🙈" : "👁"}</button>
            </div>
          </div>

          <label className="terms-check">
            <input type="checkbox" defaultChecked />
            I agree to the <button>Terms &amp; Conditions</button> and <button>Privacy Policy</button>
          </label>

          <button className="btn btn-orange btn-full" onClick={() => setScreen("home")}>Continue</button>

          <div className="divider"><hr /><span>or continue with</span><hr /></div>

          <button className="social-btn">
            <img src="https://www.google.com/favicon.ico" width={18} height={18} alt="google" />
            Continue with Google
          </button>
          <button className="social-btn">
            <span style={{color:"#1877F2",fontSize:18,fontWeight:700}}>f</span>
            Continue with Apple
          </button>

          <p className="auth-switch">
            Already have an account?{" "}
            <button onClick={() => setScreen("login")}>Sign In</button>
          </p>
        </div>
      </div>
    </div>
  );
}
