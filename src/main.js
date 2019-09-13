import {SearchForDoctor} from './doctorsearch.js'
import $ from 'jquery'

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const healthcondition = $("#healthcondition").val();
    callDoctorAPI(healthcondition)
    .then(function(response){
      const doctors = JSON.parse(response);
      console.log(doctors)
    })
  })
})
function callDoctorAPI(healthcondition){
  let doctorByCondition = new SearchForDoctor();
  let promise = doctorByCondition.getDoctorByCondition(healthcondition)
  return promise;
}
