// JQUERY CODE PROVIDED BY Md Obydullah at https://www.mynotepaper.com/add-or-remove-input-fields-dynamically-using-jquery
// add row
$(document).on("click", "#addSkill", function () {
    var html = '';
    html += '<div id="inputFormRow">';
    html += '<div class="input-group mb-3">';
    html += '<input type="text" name="skill" class="form-control m-input" placeholder="Skill or Experience" autocomplete="off">';
    html += '<div class="input-group-append">';
    html += '<button id="removeSkill" type="button" class="btn btn-danger">Remove</button>';
    html += '</div>';
    html += '</div>';

    $('#newSkill').append(html);
});

// remove row
$(document).on('click', '#removeSkill', function () {
    $(this).closest('#inputFormRow').remove();
});

// addRefRow
var referenceCount = 1;
function addReferencesRow() {
    var html = '';
    html +=
    `<div id="refFormRow">
    <br>
    <div>
        <label><strong>Reference Entry</strong></label>
        <div class="input-group mb-3">
            <div class="mr-2">
                <label>Name</label>
                <input type="text" name="refName" class="form-control m-input" placeholder="Billy Joel" autocomplete="off" required>
            </div>
            <div class="mr-2">
                <label for="refMobile">Mobile Phone Number* Proper Format: (123)-456-7890</label>
                <input type="tel" class="form-control" onblur="formatPhoneNumber('refMobile')" id="refMobile" placeholder="Please enter your Emergency Contact's mobile phone number" pattern="\([0-9]{3}\)-[0-9]{3}-[0-9]{4}" required>
            </div>
            <div class="mr-2">
                <label for="contactEmail">Email Address*</label>
                <input type="email" class="form-control" id="contactEmail" placeholder="Please Enter An Email Address That We Can Contact Your Emergency Contact With" required>
            </div>
        </div>
    </div>
    <button id="removeRef" type="button" class="btn btn-danger mb-3" onclick="removeEduRow(this)">Remove</button>
    </div>`
    referenceCount++;
    $('#refList').append(html);
}

//remove reference row
function removeRefRow(ele) {
    ele.parentNode.remove();
    referenceCount--;
};

var contactCount = 1;
// add emergency contact
$(document).on("click", "#addContact", function(){
    var html = '';
    html += `
    <div id="contactGroup">
    <br>
    <div class="form-group">
    <label for="contactfName">First Name*</label>
    <input class="form-control" id="contactfName" placeholder="Please Enter Your Emergency Contact's First Name" required>
    </div>
    <div class="form-group">
    <label for="contactmName">Middle Name</label>
    <input class="form-control" id="contactmName" placeholder="Please Enter Your Emergency Contact's Middle Name (if applicable)">
    </div>
    <div class="form-group">
    <label for="contactlName">Last Name*</label>
    <input class="form-control" id="contactlName" placeholder="Please Enter Your Emergency Contact's Last Name" required>
    </div>
    <div class="form-group">
    <label for="contactAddress">Address*</label>
    <input class="form-control" id="contactAddress" placeholder="1234 Main St" required>
    </div>
    <div class="form-group">
    <label for="contactCity">City*</label>
    <input class="form-control" id="contactCity" placeholder="Please Enter The City That Your Emergency Contact Currently Lives In" required>
    </div>
    <div class="form-group">
    <label for="contactState">State*</label>
    <select id="contactState" class="form-control" required>
    <option selected>Please Choose the State Your Emergency Contact Currently Lives In</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option>
    </select>	
    </div>
    <div class="form-group">
    <label for="contactZip">ZIP Code*</label>
    <input class="form-control" id="contactZip" pattern="[0-9]{5}" placeholder="Please Enter Your Emergency Contact's Current ZIP Code (12345)" required>
    </div>
    <div class="form-group">
    <label for="contactMobile">Mobile Phone Number* Proper Format: (123)-456-7890</label>
    <input type="tel" class="form-control" onblur="formatPhoneNumber('contactMobile')" id="contactMobile" placeholder="Please enter your Emergency Contact's mobile phone number" pattern="\\([0-9]{3}\\)-[0-9]{3}-[0-9]{4}" required>
    </div>
    <div class="form-group">
    <label for="contactTelephone">Telephone Number Proper Format: (123)-456-7890</label>
    <input type="tel" class="form-control" onblur="formatPhoneNumber('contactTelephone')" id="contactTelephone" placeholder="Please enter your Emergency Contact's telephone number (optional)" pattern="\([0-9]{3}\)-[0-9]{3}-[0-9]{4}">
    </div>
    <div class="form-group">
    <label for="contactEmail">Email Address*</label>
    <input type="email" class="form-control" id="contactEmail" placeholder="Please Enter An Email Address That We Can Contact Your Emergency Contact With" required>
    </div>
    <div class="form-group">
    <label for="contactRelationship">Relationship*</label>
    <input class="form-control" id="contactRelationship" placeholder="Please Enter Your Relationship to the Emergency Contact (Father, Brother, Friend, etc.)" required>
    </div>
    <button id="removeContact" class="btn btn-danger">Delete this Emergency Contact</button>
    </div>`;
    contactCount++;
    $('#newContact').append(html);
})

// remove emergency contact
$(document).on('click', '#removeContact', function () {
    $(this).closest('#contactGroup').remove();
    contactCount--;
});


$(document).ready(function(){
    $("#emergencyButton").removeAttr("data-toggle").css('color', 'gray');
    $("#availabilityButton").removeAttr("data-toggle").css('color', 'gray');
    $("#educationButton").removeAttr("data-toggle").css('color', 'gray');
    $("#otherButton").removeAttr("data-toggle").css('color', 'gray');
    $("#waiverButton").removeAttr("data-toggle").css('color', 'gray');
    $("#workButton").removeAttr("data-toggle").css('color', 'gray');
    $("#referencesButton").removeAttr("data-toggle").css('color', 'gray');
})

function applicantFormFunc() {
    $("#emergencyButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#applicantCollapse").attr("class", "collapse");
    $("#emergencyCollapse").attr("class", "show");
    return false;
}

function emergencyFormFunc() {
    if(contactCount < 1){
        alert("Please Add At Least 1 Emergency Contact");
        return false;
    }
    $("#availabilityButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#emergencyCollapse").attr("class", "collapse");
    $("#availabilityCollapse").attr("class", "show");
    
    return false;
}

function availabilityFormFunc() {

    if (!document.getElementById('employType1').checked && !document.getElementById('employType2').checked) {
        alert('Please choose an employment type');
        return false;
    }

    if (!document.getElementById('employday1').checked && !document.getElementById('employday2').checked && !document.getElementById('employday3').checked && !document.getElementById('employday4').checked && !document.getElementById('employday5').checked && !document.getElementById('employday6').checked && !document.getElementById('employday7').checked){
        alert('Please choose atleast one day');
        return false;
    }

    $("#educationButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#availabilityCollapse").attr("class", "collapse");
    $("#eduCollapse").attr("class", "show");
    return false;
}

function eduFormFunc() {
    $("#workButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#eduCollapse").attr("class", "collapse");
    $("#workCollapse").attr("class", "show");
    return false;
}

function workFormFunc() {
    $("#referencesButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#workCollapse").attr("class", "collapse");
    $("#referencesCollapse").attr("class", "show");
    return false;
}

function refFormFunc() {

    if (referenceCount < 1){
        alert('Please have at least 1 reference added');
        return false;
    }
    $("#otherButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#referencesCollapse").attr("class", "collapse");
    $("#otherCollapse").attr("class", "show");
    return false;
}

function otherFormFunc() {
    $("#waiverButton").attr("data-toggle", "collapse").css('color', '#303C6C');
    $("#otherCollapse").attr("class", "collapse");
    $("#waiverCollapse").attr("class", "show");
    return false;
}

//Gets current date and makes that date the minimum date for the "Date Available to Start" field
function currentDate(){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    if(month < 9){
        month = "0" + month;
    }
    if(date < 9){
        date = "0" + date;
    }
    var currentStringDate = year + "-" + month + "-" + date;
    document.getElementById("startDate").setAttribute("min", currentStringDate);
}

function formatPhoneNumber(id){
    if(document.getElementById(id).value.length === 10){
        var str1 = document.getElementById(id).value.substring(0,3);
        var str2 = document.getElementById(id).value.substring(3,6);
        var str3 = document.getElementById(id).value.substring(6,10);
        document.getElementById(id).value = "(" + str1 + ")" + "-" + str2 + "-" + str3;
    }
    if(document.getElementById(id).value.length === 12){
        var str1 = document.getElementById(id).value.substring(0,3);
        var str2 = document.getElementById(id).value.substring(3);
        document.getElementById(id).value = "(" + str1 + ")" + str2;
    }
}

function formatSSN(){
    if(document.getElementById("ssn").value.length === 9){
        var str1 = document.getElementById("ssn").value.substring(0,3);
        var str2 = document.getElementById("ssn").value.substring(3,5);
        var str3 = document.getElementById("ssn").value.substring(5,9);
        document.getElementById("ssn").value = str1 + "-" + str2 + "-" + str3;
    }
}

// remove education row
function removeEduRow(ele) {
    ele.parentNode.remove();
};

function addEducationRow() {
    var html = '';
    html += 
    `<div id="eduFormRow">
        <br>
        <div>
            <label><strong>Education Entry</strong></label>
            <div class="input-group mb-3">
                <div class="mr-2">
                    <label>Level</label>
                    <select class="form-control">
                        <option>High School</option>
                        <option>Under Graduate</option>
                        <option>Graduate</option>
                        <option>Post-Graduate</option>
                        <option>Professional</option>
                    </select>
                </div>
                <div class="mr-2">
                    <label>School Name</label>
                    <input type="text" name="eduName" class="form-control m-input" placeholder="Name of School" autocomplete="off">
                </div>
                <div class="mr-2">
                    <label>Degree</label>
                    <input type="text" name="eduDegreeName" class="form-control m-input" placeholder="Degree" autocomplete="off">
                </div>
                <div class="mr-2">
                    <label>Graduation</label>
                    <input type="date" class="form-control" id="eduGradDate" min="1920-01-01">
                </div>
            </div>
        </div>
        <button id="removeEdu" type="button" class="btn btn-danger mb-3" onclick="removeEduRow(this)">Remove</button>
    </div>`;
    $('#eduList').append(html);
};

function addWorkRow() {
    var html = '';
    html +=
    `<br><div id="workFormRow">
    <div>
        <div class="input-group mb-3">
            <div class="mr-2">
                <label><strong>Work Experience Entry</strong></label>
                <input type="text" name="workName" class="form-control mr-2" placeholder="Name of Company" autocomplete="off">
            </div>
            <div class="mr-2">
                <label>Position</label>
                <input type="text" name="workPositionName" class="form-control mr-2" placeholder="Position Title" autocomplete="off">
            </div>
            <div class="mr-2">
                <label>Start date</label>
                <input type="date" class="form-control mr-2" id="workStartDate" min="1920-01-01">
            </div>
            <div class="mr-2">
                <label>End date (If applicable)</label>
                <input type="date" class="form-control mb-3" id="workEndDate" min="1920-01-01">
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 mb-3">
                <label for="telephone">Phone Number</label>
                <input type="tel" class="form-control" onblur="formatPhoneNumber('telephone')" id="employerTelephone" placeholder="Ex: (123)-456-7890" pattern="\([0-9]{3}\)-[0-9]{3}-[0-9]{4}">
            </div>
            <div>
                <label>Company Address</label>
                <input class="form-control mb-1" placeholder="1234 Main St">
                <input class="form-control mb-1" placeholder="City">
                <select id="stateList" class="form-control mb-1">
                    <option selected>State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option>
                </select>
                <input class="form-control mb-1" placeholder="Zip code">
            </div>
        </div>
        <label>Additional information</label>
        <input type="text" name="workDescription" class="form-control" placeholder="List duties performed, skills used, etc." autocomplete="off">
    </div>
    <button id="removeWork" type="button" class="btn btn-danger m-2" onclick="removeEduRow(this)">Remove</button>
</div>`
    $('#workList').append(html);
    
}




//Function for loading state select as to not spam the html with states everytime it is needed.
$(document).ready(function(){
    states = `<option selected>State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option>`
    $("#stateList").append(states);
});

//auto today's date for signature date
$(function (){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    if(month < 9){
        month = "0" + month;
    }
    if(date < 9){
        date = "0" + date;
    }
    var currentStringDate = year + "-" + month + "-" + date;
    document.getElementById("sigDate").setAttribute("value", currentStringDate);
});

