function hideTable() {
  if(jQuery('.sizes-table-Shirts').is(":visible") && jQuery('.sizes-table-Jeans').is(":visible")) {
    jQuery(".sizes-table-Jeans").hide();
  }
  else if(jQuery('.sizes-table-Shirts').is(":visible")) {
    jQuery(".sizes-table-Shirts").hide();
    jQuery(".sizes-table-Jeans").show();
  }
  else if(jQuery('.sizes-table-Jeans').is(":visible")) {
    jQuery(".sizes-table-Jeans").hide();
    jQuery(".sizes-table-Shirts").show();
  }
}

jQuery(document).ready(function(){
  jQuery("#sizes-table-hide-link").click(function() {
    hideTable();
  });
});