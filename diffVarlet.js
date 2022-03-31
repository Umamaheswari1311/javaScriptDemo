/* function diff()
{
    let title="Differece"
    for(var i=0;i<10;i++)
    {
        console.log(title+i)
    }
    for(var j=0;j<10;j++)
    {
        title="check"
        console.log(title+i+j)
    }
}

diff()
 */


function outerFun()
{
    var scope="webpage"
    function inner()
    {
        var scope="HAi"
        console.log(scope+":"+"API")
    }
    
    inner()
}

outerFun()