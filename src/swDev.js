export const SwDev = () => {
    console.log("REGISTERING NOW")
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`).then((resp) => {
        console.log('response',resp)
    })
}