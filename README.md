<br>
<p align="center">
  <h3 align="center"><a href="https://weather-map-bitz.netlify.app/">Weather Map</a> [development challenge - bitz]</h3>
  <p align="left">
    This project is a work challenge proposed by the company bitz. For this challenge I studied vuejs simultaneously in which I did the same!
  </p>

## Addendum

I tried to respect the architecture of vuejs and its workflow as much as possible, despite that, as I learned vuejs in a short time, I still didn't have time to structure a good architecture and workflow in the project. I used some libraries, as well as integrating the PINIA library in the project, thus replacing the original vuejs context. I also did automated tests and integrated with dependabot and githubactions tests. Despite the short time, I had a great learning experience in vuejs considering the study period I had, I learned the basics of hooks and how the vuejs workflow is situated.

## Setup and Run

### Setup environment variables:
In `src/services/api.ts` setup you <a href="https://openweathermap.org/">OpenWeather</a> access token.

```ts
 const apiKey = "&appid=<apikey>"
```

### To run :
To run project in localhost use `<npm/yarn> run dev`.

To run unit tests use `<npm/yarn> run test:unit`.

#### Check package.json commands for more.