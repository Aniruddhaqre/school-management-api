# School Management API

Welcome to the School Management API documentation. This API allows you to manage school data, including adding new schools and retrieving a list of schools sorted by proximity to a specified location.

## Base URL

All endpoints are relative to the base URL:

```
https://school-management-api-af9q.onrender.com
```

## Endpoints

### 1. Add School

**Endpoint:** `/addSchool`  
**Method:** `POST`

#### Request

**Content-Type:** `application/json`

**Example Request URL:**

```
https://school-management-api-af9q.onrender.com/api/addSchool
```

**Request Body:**

```json
{
  "name": "Example School",
  "address": "123 Example Street",
  "latitude": 12.3456,
  "longitude": 65.4321
}
```

**Parameters:**

- `name` (string): The name of the school.
- `address` (string): The address of the school.
- `latitude` (number): The latitude coordinate of the school.
- `longitude` (number): The longitude coordinate of the school.

#### Response

**Status Code:** `201 Created`  
**Content-Type:** `application/json`

**Response Body:**

```json
{
  "message": "School added successfully"
}
```

**Status Code:** `400 Bad Request`  
**Content-Type:** `application/json`

**Response Body:**

```json
{
  "error": "All fields are required"
}
```


### 2. List Schools

**Endpoint:** `/listSchools`  
**Method:** `GET`

#### Request

**Query Parameters:**

- `latitude` (number): User’s latitude coordinate.
- `longitude` (number): User’s longitude coordinate.

**Example Request URL:**

```
https://school-management-api-af9q.onrender.com/api/listSchools?latitude=12.3456&longitude=65.4321
```

#### Response

**Status Code:** `200 OK`  
**Content-Type:** `application/json`

**Response Body:**

```json
[
  {
    "id": 1,
    "name": "School A",
    "address": "456 School Road",
    "latitude": 12.3450,
    "longitude": 65.4300,
    "distance": 0.5
  },
  {
    "id": 2,
    "name": "School B",
    "address": "789 School Lane",
    "latitude": 12.3500,
    "longitude": 65.4400,
    "distance": 1.2
  }
]
```

**Description:**  
The response is an array of schools sorted by their distance from the specified location. Each school object contains the following fields:

- `id` (number): The unique identifier of the school.
- `name` (string): The name of the school.
- `address` (string): The address of the school.
- `latitude` (number): The latitude coordinate of the school.
- `longitude` (number): The longitude coordinate of the school.
- `distance` (number): The distance from the user’s location to the school.

**Status Code:** `400 Bad Request`  
**Content-Type:** `application/json`

**Response Body:**

```json
{
  "error": "Latitude and longitude are required"
}
```

**Status Code:** `500 Internal Server Error`  
**Content-Type:** `application/json`

**Response Body:**

```json
{
  "error": "Error retrieving data"
}
```

## Error Handling

The API provides standard HTTP status codes to indicate success or failure:

- `200 OK` - The request was successful.
- `201 Created` - The resource was created successfully.
- `400 Bad Request` - The request was invalid or missing required parameters.
- `500 Internal Server Error` - An error occurred on the server side.

## Testing the API

You can test these endpoints using tools like [Postman](https://www.postman.com/) or `curl` commands in your terminal.

**Example `curl` command for adding a school:**

```bash
curl -X POST https://school-management-api-af9q.onrender.com/addSchool \
-H "Content-Type: application/json" \
-d '{"name": "Example School", "address": "123 Example Street", "latitude": 12.3456, "longitude": 65.4321}'
```

**Example `curl` command for listing schools:**

```bash
curl "https://school-management-api-af9q.onrender.com/listSchools?latitude=12.3456&longitude=65.4321"
```

## Conclusion

This API documentation provides an overview of the available endpoints, their expected request and response formats, and error handling. For any issues or further questions, please refer to the API support or contact the API provider.
