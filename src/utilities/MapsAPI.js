export const API_KEY_MAPS = "AIzaSyDdqeaICzWgXMI0mJQ7e1Lv8l7dUt7vFeU"


export const URL_MAPS = ( lat, lng, zoom = 14) => {
    `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap

&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY_MAPS}`
}