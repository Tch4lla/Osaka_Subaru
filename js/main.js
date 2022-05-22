//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getDate)

function getDate(){

    let date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=ckPnP1x2Cs9jWB15FasF4I6ayh6jYQ8Wha5qqdf3&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h2').innerText = data.title
      
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

