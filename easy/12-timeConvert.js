export const timeConvert = (time) => {
    let hours = Math.floor(time / 60);
    let minute = time % 60;
    return hours + ":" + minute
}

/* Time Convert
ing the JavaScript language, have the function TimeConvert(num) take the num
rameter being passed and return the number of hours and minutes the parameter
converts to(ie.if num = 63 then the output should be 1: 3).Separate the number
hours and minutes with a colon. */