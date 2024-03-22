document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptAllCookiesBtn = document.getElementById("acceptAllCookiesBtn");
    const declineCookiesBtn = document.getElementById("declineCookiesBtn");

    acceptAllCookiesBtn.addEventListener("click", function() {
        // Set cookies to indicate that the user has accepted all cookies
        document.cookie = "necessary_cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        document.cookie = "analytics_cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        cookieBanner.style.display = "none"; // Hide the cookie banner
    });

    declineCookiesBtn.addEventListener("click", function() {
        // Set cookies to indicate that the user has declined all cookies
        document.cookie = "necessary_cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        document.cookie = "analytics_cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        cookieBanner.style.display = "none"; // Hide the cookie banner
    });

    // Check if the user has previously accepted necessary cookies
    if (document.cookie.includes("necessary_cookies_accepted=true")) {
        cookieBanner.style.display = "none"; // Hide the cookie banner if necessary cookies are accepted
    } else {
        cookieBanner.style.display = "block"; // Show the cookie banner if necessary cookies are not accepted
    }
});
