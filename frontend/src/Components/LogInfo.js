import * as React from 'react';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const a = bodyParser.urlencoded({extended: false});



function LogInfo() {
    return(
        <div>
        <h1>Log In</h1>
        </div>
    );
    }
    export default LogInfo;