*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
   overflow: hidden;
    padding: 1em;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    color: #b9b9b9;
    background-color: #e3e3e3;
}
h1 {
    color: #f0a500;
}

h4 {
    color: #f0a500;
}
span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 1rem;
    height: auto;
    color: red;
    margin-top: -3px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-radius: 3px;
    background-color: #f9f9f9;
    padding-left: 5px;
    padding-right: 5px;
}

input,
input[type="radio"]+label,
input[type="checkbox"]+label:before,
select option,
select {
    width: 100%;
    padding: 1em;
    line-height: 1.4;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

input:focus {
    outline: 0;
    border-color: #bd8200;
}

input:focus+.input-icon i {
    color: #f0a500;
}

input:focus+.input-icon:after {
    border-right-color: #f0a500;
}

input[type="radio"] {
    display: none;
}

input[type="radio"]+label,
select {
    display: inline-block;
    width: 50%;
    text-align: center;
    float: left;
    border-radius: 0;
}

input[type="radio"]+label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

input[type="radio"]+label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

input[type="radio"]+label i {
    padding-right: 0.4em;
}

input[type="radio"]:checked+label,
input:checked+label:before,
select:focus,
select:active {
    background-color: #f0a500;
    color: #fff;
    border-color: #bd8200;
}
form button {
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    height: 3rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
}
.showFieldsErros {
    display: none;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    height: 3rem;
    color: red;
    background-color: #e3e3e3;
}
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]+label {
    position: relative;
    display: block;
    padding-left: 1.6em;
}

input[type="checkbox"]+label:before {
    position: absolute;
    top: 0.2em;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    padding: 0;
    content: "";
}

input[type="checkbox"]+label:after {
    position: absolute;
    top: 0.45em;
    left: 0.2em;
    font-size: 0.8em;
    color: #fff;
    opacity: 0;
    font-family: FontAwesome;
    content: "\f00c";
}

input:checked+label:after {
    opacity: 1;
}

select {
    height: 3.4em;
    line-height: 2;
}


select:focus,
select:active {
    outline: 0;
}

select option {
    background-color: #f0a500;
    color: #fff;
}

.input-group {
    margin-bottom: 2em;
    zoom: 1;
}

.input-group:before,
.input-group:after {
    content: "";
    display: table;
}
.input-group:after {
    clear: both;
}

.input-group-icon {
    position: relative;
}

.input-group-icon input {
    padding-left: 4.4em;
}

.input-group-icon .input-icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 3rem;
    height: 100%;
    line-height: 3.4em;
    pointer-events: none;
}

.input-group-icon .input-icon img {
    width: 2rem;
    height: 2rem;
    margin-top: 7px;
    margin-left: 7px;

}

.input-group-icon .input-icon:after {
    position: absolute;
    top: 0.6em;
    bottom: 0.6em;
    left: 3.4em;
    display: block;
    border-right: 1px solid #e5e5e5;
    content: "";
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}


.container {
   ** max-width: 38em;
    padding: 1em 3em 2em 3em;
    margin: 0em auto;
    background-color: #fff;
    border-radius: 4.2px;
    box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);**
}

.col-half {
    padding-right: 10px;
    float: left;
    width: 50%;
}

.col-third {
    padding-right: 10px;
    float: left;
    width: 33.33333333%;
}



@media only screen and (max-width: 540px) {
    .col-half {
        width: 100%;
        padding-right: 0;
    }
}