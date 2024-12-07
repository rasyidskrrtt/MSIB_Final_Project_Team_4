const env = require('./env');
const cloudinary = require('cloudinary').v2

const initCloudinary = () => {

    cloudinary.config({ 
        cloud_name: env.cldCloudName, 
        api_key: env.cldApiKey, 
        api_secret: env.cldApiSecret
    });

    return cloudinary
}

module.exports = initCloudinary

// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: 'dfacvtsrn', 
//         api_key: '893223734923281', 
//         api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();