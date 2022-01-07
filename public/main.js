getCSS.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:5500/style.css');

    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            // 下载完成
            console.log(request.statusCode); // 状态码
            console.log(request.response);
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert(request.status)
            }
        }
    }

    // request.onload = () => {
    //     console.log(request.response);

    //     const style = document.createElement('style');
    //     style.innerHTML = request.response;
    //     document.head.appendChild(style);
    // }

    // request.onerror = () => {
    //     console.log("失败");
    // }
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/1.js');

    request.onload = () => {
        console.log(request.response);
        const script = document.createElement('script');

        script.innerHTML = request.response;
        document.body.appendChild(script);
    }

    request.onerror = () => { }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/2.html');

    request.onload = () => {
        console.log(request.response);
        const html = document.createElement('div')

        html.innerHTML = request.response;
        document.body.appendChild(html);
    }

    request.onerror = () => { }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/4.xml');

    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            // 下载完成
            console.log(request.status); // 状态码
            if (request.status >= 200 && request.status < 300) {
                const xml = request.responseXML;
                const m = xml.querySelector('warning').textContent;
                console.log(m.trim());
            } else {
                alert(request.status)
            }
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/5.json');

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 下载完成
            console.log(request.status); // 状态码
            if (request.status >= 200 && request.status < 300) {
                const json = request.response;
                const obj = JSON.parse(json)
                console.log(obj);
            } else {
                alert(request.status)
            }
        }
    }
    request.send();
}

let index = 2;
getPage.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', `/page${index}`);

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 下载完成
            console.log(request.status); // 状态码
            if (request.status >= 200 && request.status < 300) {
                const json = request.response;
                const array = JSON.parse(json)
                const result = array.map(item => `<li>${item.id}</li>`).join('')
                console.log(result);
                $('#xxx').append(result);
                index++;
            } else {
                alert(request.status)
            }
        }
    }
    request.send();
}