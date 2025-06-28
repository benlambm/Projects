let dataLoader = new Promise(function (resolve, reject) {
    reject("An error occurred");
});

dataLoader.catch((error) => {
    console.log(error);
});