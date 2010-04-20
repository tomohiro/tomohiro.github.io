new TWTR.Widget({
    version: 2,
    type: 'profile',
    rpp: 4,
    interval: 6000,
    width: 215,
    height: 300,
    theme: {
        shell: {
            background: '#ffffff',
            color: '#333333'
        },
        tweets: {
            background: '#ffffff',
            color: '#333333',
            links: '#0067bb'
        }
    },
    features: {
        scrollbar: false,
        loop: false,
        live: false,
        hashtags: true,
        timestamp: true,
        avatars: false,
        behavior: 'all'
    }
}).render().setUser('Tomohiro').start();

