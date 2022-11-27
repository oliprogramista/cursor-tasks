async function getRandomChinese(length){
    let result = "";
    let i = 0;
    while(i < length){
        const sign = Date.now() % 100000;
        result += String.fromCharCode(sign);
        await delay(50);
        i++;
    }
    return Promise.resolve(result);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

(async () => {
    console.log(await getRandomChinese(4))
})()