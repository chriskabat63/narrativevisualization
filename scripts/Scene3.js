function populateScene3Text(){
    document.getElementById('mainanalysis').innerHTML = "The Elephant Chart";
    document.getElementById('subanalysis').innerHTML = `
     The famous "Elephant Chart" shows a little different picture.  This chart shows income
     gains across the global distribution of income. <br><br>
     There were very strong gains in the global midpoint as well as in the very high
     income groups.<br><br>
     We've annotated the area of lowest income growth in grey.<br><br>
     This analysis shows 1988-2003, but has it gotten better over time?
    `;

    document.getElementById('bottominstructions').innerHTML = `
     The <span style="background-color:grey;color:white;">grey</span> box was added to highlight the lowest amount of income growth.
     <br><br>
     You can also hover over the line to get some details.
    `;

}

