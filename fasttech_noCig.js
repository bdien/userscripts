// ==UserScript==
// @name       Remove junk from FastTech
// @namespace  My Homepage
// @version    0.19
// @downloadURL https://raw.githubusercontent.com/bdien/userscripts/master/fasttech_noCig.js
// @description  Remove ecigarettes/iJunk/GoPro from FastTech
// @match      http://www.fasttech.com/
// @match      https://www.fasttech.com/
// @match      http://www.fasttech.com/category/*
// @match      https://www.fasttech.com/category/*
// @grant      none
// @copyright  2015, Me
// @require    http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

function shouldHide(catId)
{
    // e-cigarettes
    if ( (catId == 1411) || (catId == 1412))
        return true;
    if ( (catId >= 3001) && (catId <= 3070))
        return true;
    if ((catId == 2106) || (catId == 2119))
        return true;
    // Lighters
    if (catId == 2150)
        return true;
    
    // GoPro
    if (catId == 1722)
        return true;
    
    // iJunk
    if ( (catId == 1301) || (catId == 1302))
        return true;
    
    return false;
}

$(document).ready(function() {
    var elements = $('div.ProductGridItem div.GridItemPrimaryCategory > a');
    elements.each(function() { 
        var hr = $(this).attr("href");
        var catId = parseInt(hr.match(/\d+/g));
        if (shouldHide(catId))
        {
            $(this).parent().parent().parent().remove();
        }
    });
    var elements = $('div.ProductGridItem div.GridItemName > a');
    elements.each(function() { 
        var hr = $(this).attr("href");
        var catId = parseInt(hr.match(/\d+/g));
        if (shouldHide(catId))
        {
            $(this).parent().parent().parent().remove();
        }
    });
});
