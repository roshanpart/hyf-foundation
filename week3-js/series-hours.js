/* const days = 3;
const hours = 14;
const minutes = 0;
const totalMinutes = (days * 24 *60) + (hours * 60) + minutes;
console.log(totalMinutes); */


const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function getSeriesDurationInMinutes (series) {
    const totalMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
    return totalMinutes;


}




const averageLifeSpanInMinutes = 80 * 365 * 24 * 60;


console.log(percentage);


let totalSeriesMinutes = 0;

for (let i = 0; i < seriesDurations.length; i++) {
    
totalSeriesMinutes += getSeriesDurationInMinutes(seriesDurations[i]);

const percentage = (getSeriesDurationInMinutes(seriesDurations[i])/averageLifeSpanInMinutes) * 100;

console.log(`${seriesDurations[i].title} took ${percentage.toFixed(3)}% of my life.`)

}

const totalSeriesPercentage = totalSeriesMinutes/averageLifeSpanInMinutes *100;
console.log(`All series took ${totalSeriesPercentage.toFixed(3)}% of my life.`);