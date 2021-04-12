let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development"
};
function propsCount(currentObject) {
    let count=0;
   for (const i in currentObject) {
       ++count;
   }
    console.log(count);
}
propsCount(mentor);
