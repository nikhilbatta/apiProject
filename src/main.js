import {SearchForDoctor} from './doctorsearch.js'
import $ from 'jquery'

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const healthcondition = $("#healthcondition").val();
    const doctorFirstName = $("#doctorName").val();
    console.log(doctorFirstName)
    console.log(healthcondition)
    callDoctorAPI(doctorFirstName, healthcondition)
    .then(function(response){
      const doctors = JSON.parse(response);
      console.log(doctors)
    })
  })
})
function callDoctorAPI(doctorFirstName,healthcondition){
  let doctorByCondition = new SearchForDoctor();
  let promise = doctorByCondition.getDoctorByCondition(doctorFirstName, healthcondition)
  return promise;
}
