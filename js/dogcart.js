$('.buttonform').click(function(){
    var appName = $('#aName').val()
    var appEmail = $('#aEmail').val()
    var appAddress = $('#aAddress').val()
    var appCity = $('#aCity').val()
    var appState = $('#state').val()
    var appZip = $('#aZip').val()
    var firstTimer = $("input[type='radio']:checked").val();
    var selectLoc = $('#location').val()
    console.log(appName, appEmail, appAddress, appCity, appState, appZip, firstTimer, selectLoc);
    alert("Thank you. The form information has been received");
})