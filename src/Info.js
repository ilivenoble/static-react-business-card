import React from 'react'
import picture from "./profile-pic.jpeg"

export default function Info() {
    return (
      <header className="info">
        <img
          className="profile-pic"
          src={picture}
          alt="a potrait of Noble Enyinnaya"
        />
        <section className="info-text">
          <h1>Noble Enyinnaya</h1>
          <p className="title">Frontend Developer</p>
          <p className="website">nobleenyinnaya.website </p>

          <div className="info-btn">
            <button className="email-btn">
              <i className="fa-solid fa-envelope"></i>Email
            </button>
            <button className="linkdln-btn">
              <i className="fa-brands fa-linkedin"></i>Linkedln
            </button>
          </div>
        </section>
      </header>
    );
}