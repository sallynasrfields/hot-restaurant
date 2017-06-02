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

    if res.length < 5 {

      for (i = 0, i < 5, i++){
        $(".current_reservation").html((i + 1) + ": " + res[i].name);
      }
    }
    else {
      for (i = 5, i < res.length, i++){
        $(".waiting_list").html((i + 1) + ": " + res[i].name);
      }

    }

  },

  error: function () {
    console.log('process error');
  },
});