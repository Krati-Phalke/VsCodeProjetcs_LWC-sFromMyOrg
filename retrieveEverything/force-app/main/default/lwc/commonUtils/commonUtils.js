
    const fetchURLBasedOnKey = (key) =>{
        let urlMap= {
            homeUrl : 'www.salesforce.com/home',
            myUrl : '/lifecycle/s/Home',
            about: '/lifecycle/s/about',
            employeeUrl : 'www.salesforce.com/about',
            googleUrl: 'https://www.google.com/',
            youtube: 'https://www.youtube.com/'
        }
        return urlMap[key] ? urlMap[key]: '';
    }

    export{
        fetchURLBasedOnKey
    };
