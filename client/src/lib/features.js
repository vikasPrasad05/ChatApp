import moment from "moment";

const fileFormat = (url = "") => {

    const fileExt = url.split(".").pop()

    if (
        fileExt === "mp4" ||
        fileExt === "webm" ||
        fileExt === "ogg")
        return "video";

    if (
        fileExt === "mp3" ||
        fileExt === "wav")
        return "audio";

    if (
        fileExt === "png" ||
        fileExt === "jpg" ||
        fileExt === "jpeg" ||
        fileExt === "gif")
        return "image";


    return "file";


};

const transformImage = (url = "", width = 100) => url;

const getLast7Days = () => {

    const currentDate = moment()
    const Last7Days = [];

    for (let i = 0; i < 7; i++) {
        Last7Days.unshift(currentDate.format("MMM D"));
        currentDate.subtract(1, "days")
    }

    return Last7Days;
}

export { fileFormat, transformImage, getLast7Days };