export class SearchForDoctor {
  getDoctorByCondition(doctorFirstName,healthcondition) {
    return new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${doctorFirstName}&query=${healthcondition}&location=OR&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      console.log(url)
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
// export class giphyCall {
//   giphyCallByDoctorName(doctorFirstName){
//     return new Promise(function(resolve, reject){
//       let request = new XMLHttpRequest();
//       const url = //
//       request.onload = function(){
//         if(this.status === 200){
//           resolve(request.response)
//         } else{
//           reject(Error(request.statusText))
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     })
//   }
}
