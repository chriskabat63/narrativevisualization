function populateScene4Text() {

    document.getElementById('mainanalysis').innerHTML = "The Elephant Chart Over Time";
    document.getElementById('subanalysis').innerHTML = `
     In this analysis, you can see that checking additional periods within the dataset
     does not show much of an improvement for those in the 80-85% distribution range.
     <br><br>
     By looking at individual lines, the growth has changed a bit, but the elephant pattern
     still remains in tact.
     `;

    document.getElementById('bottominstructions').innerHTML = `
     The <span style="background-color:grey;color:white;">grey</span> box was added to highlight the lowest amount of income growth.
     <br><br>
     You can also hover over the line to get some details.
     <br><br>
     Clicking the circles in the legend will also toggle the lines to allow you to choose which
     periods to compare.
    `;

}
