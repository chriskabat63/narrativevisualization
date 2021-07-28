function populateScene3Text() {

    document.getElementById('maintitle').innerHTML = "Tracking the Elephant";
    document.getElementById('subtitle').innerHTML = `
    Branko Milanovic and Christoph Lakner did a study in which they collected real incomes
    across the globe from approximately 120 countries.  The units are 2005 PPP which corresponds
    approximately to US dollars in the year 2005.
    `;

    document.getElementById('mainanalysis').innerHTML = "The Elephant Chart Over Time";
    document.getElementById('subanalysis').innerHTML = `
     In this analysis, you can see that checking additional periods within the dataset
     does not show much of an improvement for those in the 80-85% distribution range.
     <br><br>
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
