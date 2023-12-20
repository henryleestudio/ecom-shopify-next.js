export default function Footer (props) {
    return (
        <footer className={'footer'}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-9"}>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="footer__links">
                                    <span className="footer__column-title">
                                        Got Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                            <div className="col-md-2">
                            <div className="footer__links">
                                    <span className="footer__column-title">
                                        Got Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                            <div className="col-md-2">
                            <div className="footer__links">
                                    <span className="footer__column-title">
                                        Got Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-3"}>
                        <div className="footer__right-container">
                            <span className="footer__column-title">SignUp for Newletter</span>
                            <input className="footer__input" type="text" name="email-newsletter" placeholder="youremail@company.com"/>
                            <p>By signing up for email, you agree to The Co – Creative{`'`}s Terms of Service and Privacy Policy. By signing up via text, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from The Co – Creative at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply. View Terms & Privacy.</p>
                            <div className="footer__social-icons">
                                <a href="#" className="footer__social-link"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="footer__social-link"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="#" className="footer__social-link"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" className="footer__social-link"><i class="fa-brands fa-youtube"></i></a>
                                <a href="#" className="footer__social-link"><i class="fa-brands fa-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="footer__bottom">
                            <div className="footer__copyright">
                            &copy; 2023 The Co – Creative, Inc All Rights Reserved
                            </div>

                            <div className="footer__extra-links">
                                <a href="#" className="">Link</a>
                                <a href="#" className="">Link</a>
                                <a href="#" className="">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}