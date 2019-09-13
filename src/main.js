import {SearchForDoctor} from './doctorsearch.js'
import $ from 'jquery'
import './styles.css';
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    console.log("ok")
    getAndDisplayData();
  })
})
function getAndDisplayData(){
  const healthcondition = $("#healthcondition").val()
  const doctorFirstName = $("#doctorName").val();
  console.log(healthcondition)
  console.log("here")
  callDoctorAPI(doctorFirstName, healthcondition).then(displayDataAsTable, displayError);
}
function callDoctorAPI(doctorFirstName,healthcondition){
  let doctorByCondition = new SearchForDoctor();
  let promise = doctorByCondition.getDoctorByCondition(doctorFirstName, healthcondition)
  return promise;
}
function displayDataAsTable(response){
    const doctors = JSON.parse(response);
    if(doctors.data.length === 0){
      $(".errorMessage").show()
      $(".firstName").hide();
    } else {
    doctors.data.forEach(function(doctor){
      $(".errorMessage").hide();
      $(".firstName").show();
      $(".firstName").append(`<li> <h1> ${doctor.profile.first_name} ${doctor.profile.last_name} </h1> <br> ${doctor.profile.bio} <br> <img src=${doctor.profile.image_url}  </img> <br> My address: ${doctor.practices[0].visit_address.street} <br> My number: ${doctor.practices[0].phones[0].number} <br> I'm willing to accept new patients:${doctor.practices[0].accepts_new_patients} <br>
     <a href=${doctor.practices[0].website}>My Website</a> </li> <br> <br>`)
    })
  }
}
function displayError(response){
    console.log(response.statusText);
}
