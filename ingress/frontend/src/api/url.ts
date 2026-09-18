export class Url {

    baseUrl: string;
    create: string;
    getExperiments: string;
    update: string;
    login: string;

constructor() {
    this.baseUrl   = Url.getBaseUrl();
    this.create    = `${this.baseUrl}api/v1/experiments/create`;
    this.getExperiments    = `${this.baseUrl}api/v1/experiments/get/all`;
    this.update    = `${this.baseUrl}api/v1/experiments/update`;
    this.login     = `${this.baseUrl}auth/login`;
}

static getBaseUrl(): string {
    let url = window.location.href;
    if (url.includes("http://localhost:3000/")) {
        return "http://0.0.0.0:8001/";
    }
    
    // Handle local network access (e.g., http://192.168.1.100:3000/)
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    const port = urlObj.port;
    
    // If accessing from local network (non-localhost), map to backend port 8001
    if (port === '3000' && (hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.') || hostname === '127.0.0.1')) {
        return `http://${hostname}:8001/`;
    }
    
    return window.location.href;
}
deleteUrl(name:string):string{
    return `${this.baseUrl}api/v1/experiments/delete/${name}`;
}
}
