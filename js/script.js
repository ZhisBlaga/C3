function* range(start, end) {
  for (let i = start; i <= end; i++) {
      yield i;
  }
}

if ($.cookie('sity') == null){
 

    $('#setCookies').click(function() {
    $.cookie('sity', $("#inputSity").val());
    
        
     });


    
}
else{
    $('#inputSity').hide();
    console.log($.cookie('sity'))
    $('.col-form-label').text('Ваш город - ' +($.cookie('sity')));
    $('#setCookies').text('Reset');

   
      // установить cookie
      $('#setCookies').click(function() {
        $.removeCookie("sity");
         
       });
  


}
if ($.cookie('defaultCheck1') != null){
  $('#setcheck').hide();
  for (i of range(1,6)){
    $('#defaultCheck'+i).attr("disabled", true);
    if ($.cookie('defaultCheck'+i) == 'true'){
      $('#defaultCheck'+i).prop( "checked", true );
    }
  }



}



$('#setcheck').click(function() {
  for (i of range(1,6)){
    $('#defaultCheck'+i).attr("disabled", true);
    $('#setcheck').hide();
    if ($('#defaultCheck'+i).prop( "checked" )){
      console.log('defaultCheck'+i+ ' Checked')
      $.cookie('defaultCheck'+i, 'true');
      
    }
    else{
      $.cookie('defaultCheck'+i, 'false');
    }
    
  }
  console.log('Нажато');
  
      
   });




