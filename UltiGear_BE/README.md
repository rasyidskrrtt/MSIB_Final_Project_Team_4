To modify the code to allow searching by product name, you can add a query parameter for the search term in the request, and then use it to filter the products based on the `name` field. Here's how you can do it:

### Updated Code:
```javascript
getAllProducts: async (req, res) => {
    try {
        // Get search query parameter from request (if available)
        const { search } = req.query;

        // Build the query filter object
        const filter = search ? { name: { $regex: search, $options: 'i' } } : {};

        // Find products with optional search filter
        const products = await models.Product.find(filter);

        return ResponseAPI.success(res, { products }, 'Products retrieved successfully');
    } catch (err) {
        return ResponseAPI.serverError(res, err);
    }
},
```

### Explanation:
- **`search`**: This code gets the `search` parameter from the query string. If the `search` parameter is present, it filters products by name using a regular expression (case-insensitive search).
- **`$regex`**: The regular expression query allows for partial matches, and `$options: 'i'` makes the search case-insensitive.
- **`filter`**: If there's no `search` query, it defaults to an empty object `{}`, meaning no filtering.

### Example Request to Hit the API:
Assuming your API endpoint is `/api/products`, here are some examples of how to make requests.

1. **Search with a term** (e.g., products with names containing "phone"):
   ```http
   GET /api/products?search=phone
   ```

2. **Request with no search filter** (returns all products):
   ```http
   GET /api/products
   ```

### Example using `fetch` in JavaScript:
```javascript
// Example using JavaScript Fetch API to hit the endpoint
async function getProducts(searchTerm) {
  const url = new URL('https://your-api-url/api/products');
  if (searchTerm) {
    url.searchParams.append('search', searchTerm);
  }

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

// Usage example
getProducts('phone');  // Search for products with "phone" in the name
```

This should meet your requirement of adding a search functionality to your API, and provide a clean way to search products by name.