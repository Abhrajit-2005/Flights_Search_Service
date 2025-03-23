function compareTime(t1, t2) {
    let a = new Date(t1);
    let b = new Date(t2);
    return a.getTime() > b.getTime();
}

module.exports = {
    compareTime
};