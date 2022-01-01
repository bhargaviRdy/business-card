import React from "react";
import image from '../images/dp.jpg';
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Header(){
    return(
        <header>
            <img className="image" src={image}  alt="image"/>
            <h3 className="title">Bhargavi Reddy</h3>
            <p className="designation">Frontend developer</p>
            <small className="siteaddress">bhargavi.tech</small>

            <div className="btns">
                <button className="btn emailBtn"><HiOutlineMail /> Email</button>
                <button className="btn inBtn"><FaLinkedin />LinkedIn</button>
            </div>
            <div className="maincontent">
            <h5 className="title">About</h5>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h5 className="title">Interests</h5>
            <p className="interests">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>

        </header>
    )
}