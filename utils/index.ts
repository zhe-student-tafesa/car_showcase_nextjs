import { FilterProps } from "@/types";

export async function fetchCars() {
    // const { manufacturer, year, model, limit, fuel } = filters;

    // Set the required headers for the API request
    const rapidApiKey = process.env.X_RAPIDAPI_KEY;
    const headers: HeadersInit = {
        "X-RapidAPI-Key": rapidApiKey!,
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}