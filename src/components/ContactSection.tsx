import { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";

const clearForm = () => {
  // Remove values from form
  const name = document.getElementById("name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const message = document.getElementById("message") as HTMLTextAreaElement;
  name.value = "";
  email.value = "";
  message.value = "";
};

const clearErrorIfPresent = () => {
  const alertFail = document.querySelector(".alert-fail.active");
  if (alertFail) {
    alertFail.classList.remove("active");
  }
};

const ContactSection = () => {
  const [shouldClearForm, setShouldClearForm] = useState(false);

  const handleContactSend = useCallback(async (e) => {
    clearErrorIfPresent();
    e.preventDefault();
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;

    const response = await axios.post("/api/contact", {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    if (response.status === 200) {
      const alertSuccess = document.querySelector(".alert-success");
      alertSuccess.classList.add("active");
      setShouldClearForm(true);
      return;
    } else {
      // Failure
      const alertFail = document.querySelector(".alert-fail");
      alertFail.classList.add("active");
    }
  }, []);

  // Auto clear after 3 seconds
  useEffect(() => {
    if (shouldClearForm) {
      clearErrorIfPresent();
      const timer = setTimeout(() => {
        const alertSuccess = document.querySelector(".alert-success.active");
        alertSuccess.classList.remove("active");
        clearForm();

        setShouldClearForm(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [shouldClearForm]);

  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">+ (860) 815 7873</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:sckeney@gmail.com">sckeney@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Address</div>
                <div className="text">Wilmington, NC</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">I am available for Freelance hire</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            <form id="cform" method="post">
              <div className="group-val">
                <input id="name" type="text" name="name" placeholder="Name" />
              </div>
              <div className="group-val">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="group-bts">
                <button
                  type="button"
                  className="btn hover-animated"
                  onClick={handleContactSend}
                >
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
            <div className="alert-fail">
              <p>Uh oh! Something went wrong.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
