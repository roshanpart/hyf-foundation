const activities = [];


let usageLimit = 60;

function addActivity(date, activity, duration) {
    activities.push({date, activity, duration});
    
}
addActivity("23/7-18", "Youtube", 30);
addActivity("24/7-18", "Facebook", 20);
addActivity("25/7-18", "TikTok", 15);
console.log(activities);

function showStatus() {
if (activities.length === 0) {
    console.log(`Add some activities before calling ${showStatus.name}.`);
    return;
}

    let totalDuration = 0;
    for (let i = 0; i < activities.length; i++) {
totalDuration += activities[i].duration;
    }

for (let i = 0; i < activities.length; i++) {
    console.log(`Activity: ${activities[i].activity}, Duration: ${activities[i].duration} minutes`);
}


    console.log(`You have added ${activities.length} activities and your total time spent is ${totalDuration} minutes.`);
    

    if (totalDuration >= usageLimit) {
        console.log(`You have reached your limit, no more smartphoning for you!`);
    } else console.log(`Your phone usage is still within limit.`);

}

showStatus();