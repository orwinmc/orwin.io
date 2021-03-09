-   Server.js file is there so that way I can do HTTPS
-   I'm not sure where the links that I used are, but these should go HERE

-   sw.js and workbox files are generated next-pwa I believe as because the app
    is built with Next.js, the service worker is needed for offline stuff (at least
    I believe this is how it works)

-   I removed the index.html as I saw in the next.js documentation you can put
    everything in the \_app.js file. The link for that should go HERE

-   I'm not sure what the best way to do environment variables but currently I've
    added dotenv which seems to do the trick for now. Still will need to figure out
    how to get LAN working which might mean modifying how SSL certificates are
    generated

-   Still having problems getting standalone application to work

-   next.config.js was added for next-pwa as well so PWA will work on iOS with
    hidden address bar (fullscreen standalone with just status bar)
