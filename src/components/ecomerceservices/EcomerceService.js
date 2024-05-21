import React, { Component } from 'react'
import axios from 'axios';
export  class EcomerceService{
    static serverurl="http://localhost:7000";
    static getAlluserDetails(){
        let dataurl=`${this.serverurl}/userDetails`
        return axios.get(dataurl)
    }
    static postUserDetails(userDetails){
        let dataurl=`${this.serverurl}/userDetails`
        return axios.post(dataurl,userDetails)
    }
    
  }

