window.addEventListener("load", _ => {
    const query = window.location.search.substring(1);
    query.split("&").find(component => {
        const parts = component.split("=");
        if (parts.length === 2 && parts[0] === "font") {
            document.documentElement.style.setProperty("--brand-font", parts[1]);
            return true;
        } else {
            return false;
        }
    });
});