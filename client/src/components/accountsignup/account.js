import React from "react";
// import "../accountsignup/js/main.js";
// import "../accountsignup/js/map-custom.js";
// import "../AccountSignUp/Css/";
// import "../AccountSignUp/Js"
// import "../accountsignup/css/util.css";
// import "../accountsignup/css/main.css";
// import "../accountsignup/vendor/animate/animate.css";
// import "../accountsignup/vendor/animsition/css/animsition.css";
// import "../accountsignup/vendor/animsition/css/animsition.min.css";
// import "../accountsignup/vendor/bootstrap/css/bootstrap-grid.css";
// import "../accountsignup/vendor/"
// import "../accountsignup/vendor/bootstrap/css";
// import "../accountsignup/vendor/bootstrap/css";
// import "../accountsignup/vendor/bootstrap/css";
// import "../accountsignup/vendor/bootstrap/css";
// import "../accountsignup/vendor/bootstrap/css";
// import "../accountsignup/vendor/bootstrap/js/";
// import "../accountsignup/vendor/bootstrap/js/";

// import "../accountsignup/vendor/animsition/js/animsition.min.js";
// import "../accountsignup/vendor/animsition/js/animsition.js";
// import "../accountsignup/vendor";

let sectionStyle = {
    backgroundImage: "url(" + "../accountsignup/images/bg-01.jpg" + ")"
}
const AccountSignUp = () => (
    <div className="limiter">
		<div className="container-login100">
			<div className="login100-more" style={{backgroundImage: `url(require('../accountsignup/images/bg-01.jpg'))`}}/>

			<div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-59">
						Sign Up
					</span>

					<div className="wrap-input100 validate-input" data-validate="Name is required">
						<span className="label-input100">Full Name</span>
						<input className="input100" type="text" name="name" placeholder="Name..."/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span className="label-input100">Email</span>
						<input className="input100" type="text" name="email" placeholder="Email addess..."/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Username is required">
						<span className="label-input100">Username</span>
						<input className="input100" type="text" name="username" placeholder="Username..."/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="text" name="pass" placeholder="*************"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Repeat Password is required">
						<span className="label-input100">Repeat Password</span>
						<input className="input100" type="text" name="repeat-pass" placeholder="*************"/>
						<span className="focus-input100"></span>
					</div>

					<div className="flex-m w-full p-b-33">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label className="label-checkbox100" for="ckb1">
								<span className="txt1">
									I agree to the
									<a href="#" className="txt2 hov1">
										Terms of User
									</a>
								</span>
							</label>
						</div>

						
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Sign Up
							</button>
						</div>

						<a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
							Sign in
							<i className="fa fa-long-arrow-right m-l-5"></i>
						</a>
					</div>
				</form>
			</div>
        </div>
    </div>
)


export default AccountSignUp;