const getAppFormLocalStorage = () => {
    const storeAppString = localStorage.getItem('app');

    if (storeAppString) {
        const storedApp = JSON.parse(storeAppString)
        return storedApp;
    }
    return [];
}

const addAppToLocalStorage = (id) => {
    const app = getAppFormLocalStorage();
    const newApps = [...app, id]
    saveAppToLocalStorage(newApps);
}


const saveAppToLocalStorage = (app) => {
    const appStringified = JSON.stringify(app);
    localStorage.setItem('app', appStringified)
}



const removeAppFormLocalStorage = (id) => {
    const storeApp = getAppFormLocalStorage();
    const remainingApp = storeApp.filter((storeId) => storeId !== id);
    saveAppToLocalStorage(remainingApp)
}
export {getAppFormLocalStorage, addAppToLocalStorage, removeAppFormLocalStorage}