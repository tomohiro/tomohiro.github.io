$(function () {
    var info = $('<p/>').append('Bookmarks loading...');
    var ul = $("#bookmark-list");
    ul.before(info);

    $.getJSON('http://query.yahooapis.com/v1/public/yql?callback=?',
    {
        q:      "SELECT title, link FROM rss WHERE url = 'http://b.hatena.ne.jp/Tomohiro/rss' limit 5",
        format: 'json'
    }, function (data) {
        info.empty();

        if (data.query.results && data.query.results.item) {
            $.each(data.query.results.item,
                function (i, item) {
                    $('<li/>').append($('<a/>').attr({
                        href: item.link
                    }).append(item.title)).appendTo(ul);
                });
        } else {
            ul.before($('<p/>').append('Sorry, bookmarks load faild.'));
        }
    });
});
