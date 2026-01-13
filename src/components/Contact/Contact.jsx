import "./Contact.css";

export function Contact() {
    return (
        <section className="contactContainer">

            {/* LEFT SIDE */}
            <ul className="contactList">
                <li>
                    <img src="/public/mail-icon.svg" alt="email" />
                    <a href="mailto:yadavgourav263@gmail.com">yadavgourav263@gmail.com</a>
                </li>

                <li>
                    <img src="/public/call-icon.svg" alt="phone" />
                    <a href="tel:+9111773835">9111773835</a>
                </li>

                <li>
                    <img src="../../../public/web-icon.svg" alt="website" />
                    <a href="https://www.mywebsite.com" target="_blank" rel="noreferrer">
                        www.mywebsite.com
                    </a>
                </li>
            </ul>

            {/* RIGHT SIDE */}
            <div className="socialLinks">
                <a href="#" target="_blank">
                    <img src="/public/dribble-icon.svg" alt="dribbble" />
                </a>
                <a href="www.linkedin.com/in/gourav-yadavv" target="_blank">
                    <img src="/public/linkedin-icon.svg" alt="linkedin" />
                </a>
                <a href="https://github.com/gourav-yadav-dev" target="_blank">
                    <img src="/public/facebook-icon.svg" alt="facebook" />
                </a>
            </div>

        </section>
    );
}
