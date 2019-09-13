import {SearchForDoctor} from './doctorsearch.js'
import $ from 'jquery'

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    getAndDisplayData();
  })
})

function getAndDisplayData(){
  const healthcondition = $("#healthcondition").val()
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
    console.log(doctors)
    doctors.data.forEach(function(doctor){
      console.log(doctor.profile)
      $(".firstName").append(`<li> ${doctor.profile.first_name} ${doctor.profile.last_name} <br> ${doctor.profile.bio} <br> <img src=${doctor.profile.image_url} </img> <br> </li>`)
      // $(".lastName").append(`<li> ${doctor.profile.last_name} </li>`)
    })
}
function displayError(response){
    console.log(response.statusText);
}
// function clearPreviousSearch(){
//   $(".firstName").append("");
// }
