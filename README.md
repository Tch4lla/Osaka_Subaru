# Osaka Subaru Stargazers

Everyday NASA posts an Atronomy Photo of the Day. This app takes that image and displays it to the user along with the description 
**Link to project:** https://osakasubaru.netlify.app/

![alt tag](https://github.com/Tch4lla/Osaka_Subaru/blob/main/nasa_page-changed.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, NASA APOD API
The API data is fetched from NASA an a JSON object is returned. Here I select values from the NASA API keys in order to display the data to the user. This site continues to update daily as NASA continues to upload new photos. The earliest date available is June 16th 1995, so if users select any date before then, 'undefined' will be returned


## Optimizations

This project uses limited CSS. In the future I would like to curate the site to that the description is more accessable to visually impaired users. I would also limit the size of the picutre in order to make it easier to see the entire photo at once, vs where it is in its current form where the photo can be so large that the description is pushed off of the page. 

## Lessons Learned:

This was the first time wehre I needed to use a special kety in order to access the API data. Whithout that key the query would not run. I have a better understanding of how keys are used for security purposed when sending requests to an API and can implement them when I have my own api data to host 

