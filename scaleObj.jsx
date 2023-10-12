//rips this https://creativecow.net/forums/thread/scale-selected-layers-script/
function scaleObjects(thisObj)
{
    //Initialize an object to store the undo group
    var scrname = "scaleObjects";
    //Get current composition
    var cur = app.project.activeItem;
    //Get selected layer
    var l = cur.selectedLayers;
    app.beginUndoGroup(scrname);

    //For loop the scrubs through the contents of the layer
    for(i=0; i < l.length-1; i++)
    {
        //Assign current instance to a variable
        cur = l[i];
        //Get its scale
        var lsc = cur.scale.value;
        //Assign its X and Y values to a random value
        lsc[0] = lsc[1] *= Math.random();
        //Set its scale to our new value
        cur.scale.setValue(lsc);
    }
}
//Calls the function 
scaleObjects(this);