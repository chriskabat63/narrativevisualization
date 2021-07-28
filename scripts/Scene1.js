function populateScene1Text(){
    document.getElementById('mainanalysis').innerHTML = "Income by Decile Group";
    document.getElementById('subanalysis').innerHTML = `
    The first step is to look at the mean of income by decile group.  This has been plotted
    by the years included in the study of 1988, 1993, 1998, 2003, and 2008.<br><br>
    At first glance, you can see that income growth (or loss) across decile groups
    seems pretty consistent by looking at the lines for each decile.<br><br>
    However further analysis showed that things may not be as consistent as they seem.<br>
    `;

    document.getElementById('bottominstructions').innerHTML ="";

}
