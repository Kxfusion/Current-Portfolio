'use server'

import { revalidatePath } from "next/cache";
import dotenv from 'dotenv';

dotenv.config();

const makeApiCall = async (path: string, method = 'GET', body?: unknown) => {
    const requestOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    return fetch(`${process.env.API_URL}${path}`, requestOptions);
};
