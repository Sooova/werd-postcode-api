# Australian Locality Search API

This API allows users to search for Australian localities by postcode. It's a simple and efficient way to retrieve locality information, including the state and locality name, based on postcode inputs.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your system.

### Installing

To install the necessary dependencies, run the following command in the root directory of your project:

    npm i


### Running the Application

Start the application with: 

    npm run start


> **_NOTE:_** Optionally, you can specify a `PORT` environment variable if you do not want to use the default port (3030). For example:


## API Usage

### Endpoint: Search by Postcode

- **URL**: `/api/search/by-postcode`
- **Method**: `GET`
- **URL Params**: `postcodes=[comma-separated list of postcodes]`
- **Example**: `localhost:3030/api/search/by-postcode?postcodes=3030,2000`

#### Success Response

If the request is successful, the API returns a JSON object containing the count of found localities and an array of locality information.
- **endpoint**: `/api/search/by-postcode?postcodes=3030,2000`
- **Code**: 200 OK
- **Content**:

```json
{
    "success": {
        "count": 2,
        "data": [
            {
                "state": "VIC",
                "postcode": "3030",
                "locality": "CHARTWELL"
            },
            {
                "state": "NSW",
                "postcode": "2000",
                "locality": "BARANGAROO"
            }
        ]
    },
    "errors": {
        "count": 0,
        "data": []
    }
}

```
#### Error Response
If there are any errors (e.g., invalid or non-existent postcodes), the API still returns a 200 OK status but includes error details in the response.

- **Endpoint**: `localhost:3030/api/search/by-postcode?postcodes=3030,2000,234234`
- **Code**: 200 OK
- **Content**:

```json
{
    "success": {
        "count": 2,
        "data": [
            {
                "state": "VIC",
                "postcode": "3030",
                "locality": "CHARTWELL"
            },
            {
                "state": "NSW",
                "postcode": "2000",
                "locality": "BARANGAROO"
            }
        ]
    },
    "errors": {
        "count": 1,
        "data": [
            "Postcode 234234 not found"
        ]
    }
}

```

## Rate Limiting

To ensure fair use and prevent abuse, we've implemented rate limiting on our API using the `express-rate-limit` middleware. This helps to control the amount of requests a user can make to our API within a specific timeframe.

### How It Works

The rate limiter is configured to allow a maximum of 5 requests per IP address within a 15-second window. If this limit is exceeded, the API will return a `429 Too Many Requests` status code, indicating that the request rate limit has been exceeded.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

