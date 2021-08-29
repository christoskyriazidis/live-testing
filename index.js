
let GLO_MAINURL = location.href;


$(document).ready(function () {
    let sportIdFromUrl = window.location.href.split('/')[5];
    let selectedSport = sportIdFromUrl ? sportIdFromUrl : 1
    const _LIVE = new LIVE(selectedSport);

    window.addEventListener('popstate', e => {

    });

    $(document).on("click", ".sport-nav-bar-item", function () {
        let sportId = $(this).attr('sport-id');

        //passing selected sport id to make url and data change
        _LIVE.SetSelectedSportId(sportId);
    });

})
