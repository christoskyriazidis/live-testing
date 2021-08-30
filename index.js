
let GLO_MAINURL = location.href;
let sportIdFromUrl = window.location.href.split('/')[5];
let selectedSport = sportIdFromUrl ? sportIdFromUrl : 1

const _LIVE = new LIVE(selectedSport);
$(document).ready(function () {

    window.addEventListener('popstate', e => {
        
    });

    $(document).on("click", ".sport-nav-bar-item", function () {
        let sportId = $(this).attr('sport-id');

        //passing selected sport id to make url and data change
        _LIVE.SetSelectedSportId(sportId);
    });

})
