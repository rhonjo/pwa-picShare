var deferredPrompt;

if ('serviceWorker' in navigator) {
    //if service worker exist in the browser, start up sw.js
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log("service worker registered")
        })
}
//this is the event to show banner
window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt')
    event.preventDefault();
    deferredPrompt = event;
    return false;

})

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //resolve('This is executed once the timer is done!');
        reject({code: 500, message: 'An error occurred!'});
        //console.log('This is executed once the timer is done!');
    }, 3000);
});

// fetch('http://httpbin.org/ip')
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

// fetch('http://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json',
//         'Accept' : 'application/json'
//     },
//     body: JSON.stringify({message: 'Does this work'})
// })
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

// promise.then(function(text) {
//   return text;
// }, function(err) {
//   console.log(err.code, err.message)
// }).then(function(newText) {
//   console.log(newText);
// });

promise.then(function(text) {
    return text;
}).then(function(newText) {
    console.log(newText);
}).catch(function(err) {
    console.log(err.code, err.message);
});

console.log('This is executed right after setTimeout()');