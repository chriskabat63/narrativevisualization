function populateScene2Text(){
    document.getElementById('maintitle').innerHTML = "Tracking the Elephant";
    document.getElementById('subtitle').innerHTML = `
    Branko Milanovic and Christoph Lakner did a study in which they collected real incomes
    across the globe from approximately 120 countries.  The units are 2005 PPP which corresponds
    approximately to US dollars in the year 2005.
    `;

    document.getElementById('mainanalysis').innerHTML = "Income by Decile Group";
    document.getElementById('subanalysis').innerHTML = `
    The first step is to look at the mean of income by decile group.  This has been plotted
    by the years in the study of 1988, 1993, 1998, 2003, and 2008.<br><br>
    At first glance, you can see that income growth (or loss) across decile groups
    seems pretty consistent.<br><br>
    However further analysis showed that things may not be as consistent as they seem.<br>
    `;

}

