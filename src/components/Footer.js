import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";




export default function Footer(){
    return(
        <footer>
            <GoMarkGithub />
            <BsTwitter />
            <FiInstagram />
            <FaFacebookF />
        </footer>
    )
}