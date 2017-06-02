
$(document).ready(function () {

  // Here we use jQuery to select the header with "click-me" as its ID.
  // Whenever it is clicked...
  $("#click-me").on("click", function () {

    var reservationCustomers = [];
    var name = $
    var phoneNumber = $
    var email = $
    var alias = $

    var reservationCustomer = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      alias: alias
    }

    $.ajax({
      url: "/tables",
      type: "POST",
      dataType: "json",
      data: { objectData: someObject },
      contentType: "application/json",
      cache: false,
      timeout: 5000,
      complete: function () {
        //called when complete
        console.log('process complete');
      },

      success: function (data) {
        reservationCustomers.push(revervationCustomer);
      },

      error: function () {
        console.log('process error');
      },
    });


  }

    $("#click-me").on("click", function () {   

    $.ajax({
        url: "/tables",
        type: "GET",
        dataType: "json",
        data: { objectData: someObject },
        contentType: "application/json",
        cache: false,
        timeout: 5000,
        complete: function () {
          //called when complete
          console.log('process complete');
        },

        success: function (data) {

          for (i = 0; i < 5; i++) {
            $(".current_reservation").html((i + 1) + ": " + data[i].name);
          }


          for (i = 5; i < data.length; i++) {
            $(".waiting_list").html((i + 1) + ": " + data[i].name);

          }

        },

        error: function () {
          console.log('process error');
        },
      });


}




