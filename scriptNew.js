 $(document).ready (function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8437380850',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8437380850.1677ed0.cfc643aab57d4e789d0b017a0ec7908b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a a href="{{image}}" target="_blank"><img src="{{image}}"  class="img-fluid"/></a></div>',
});
userFeed.run();
    
      // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
     

                 

/// Initialize and add the map
//function initMap() {
//  // The location of Uluru
//  var uluru = {lat: -25.344, lng: 131.036};
//  // The map, centered at Uluru
//  var map = new google.maps.Map(
//      document.getElementById('map'), {zoom: 4, center: uluru});
//  // The marker, positioned at Uluru
//  var marker = new google.maps.Marker({position: uluru, map: map});
//}    
//    
   
      
 });   
