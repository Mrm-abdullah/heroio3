const getAppFromLocalStorage = () => {
    const storeAppString = localStorage.getItem('app');

    if (storeAppString) {
        const storedApp = JSON.parse(storeAppString)
        return storedApp;
    }
    return [];
}

const addAppToLocalStorage = (id) => {
    const app = getAppFromLocalStorage();
    if (app.includes(id)) return;
    const newApps = [...app, id]
    saveAppToLocalStorage(newApps);
}


const saveAppToLocalStorage = (app) => {
    const appStringified = JSON.stringify(app);
    localStorage.setItem('app', appStringified)
}


const removeAppFromLocalStorage = (id) => {
    const storeApp = getAppFromLocalStorage();
    const remainingApp = storeApp.filter((storeId) => parseInt(storeId) !== parseInt(id));
    saveAppToLocalStorage(remainingApp)
}
export {getAppFromLocalStorage, addAppToLocalStorage, removeAppFromLocalStorage}