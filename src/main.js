import {SearchForDoctor} from './doctorsearch.js'
import $ from 'jquery'

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    getAndDisplayData();
  })
})

function getAndDisplayData(){
  const healthcondition = 8;
  const doctorFirstName = $("#doctorName").val();
  callDoctorAPI(doctorFirstName, healthcondition).then(displayDataAsTable, displayError);
}

function callDoctorAPI(doctorFirstName,healthcondition){
  let doctorByCondition = new SearchForDoctor();
  let promise = doctorByCondition.getDoctorByCondition(doctorFirstName, healthcondition)
  return promise;
}

function displayDataAsTable(response){
    const doctors = JSON.parse(response);
    doctors.data.forEach(function(doctor){
      console.log(doctor.profile)
      $(".firstName").append(`<li> ${doctor.profile.first_name} ${doctor.profile.last_name} </li>`)
      // $(".lastName").append(`<li> ${doctor.profile.last_name} </li>`)
    })
}
function displayError(response){
    console.log(response.statusText);
}
