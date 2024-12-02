const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/database');
const { port } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/ordersRoutes');  // Import orders routes
const morgan = require('morgan');

const app = express();  // Initialize express app

connectDB();

// Middleware
app.use(morgan('dev'));  // For logging requests
app.use(cors());         // For handling Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // For parsing application/json

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'UltiGear API',
            version: '1.0.0',
            description: 'API documentation for UltiGear backend',
        },
        servers: [
            {
                url: `http://localhost:${port}/api`, // Use dynamic port
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Path to route files for swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Use Swagger UI for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Register routes
app.use('/api/users', userRoutes);     
app.use('/api/products', productRoutes); 
app.use('/api/orders', orderRoutes);    

// Error handler middleware (ensure it's defined in the errorHandler file)
app.use(errorHandler);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api-docs`);
});
