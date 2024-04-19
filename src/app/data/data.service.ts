import { Injectable } from '@angular/core';
import { API_INSTANCE } from '../config';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    getData = async (path: string) => {
        return await API_INSTANCE.get(path)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }
}
