# Car Showroom Website 🚗

A modern, fully responsive car showroom website built with React, Vite, and PostgreSQL.

## Features

✅ **Browse Car Listings** - View all available cars in a beautiful grid layout
✅ **Search Functionality** - Real-time search by make and model
✅ **Advanced Filters** - Filter by make, year, and price range
✅ **Car Details Page** - View complete specifications for each vehicle
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Modern UI** - Clean, professional interface with smooth animations
✅ **React Router** - Seamless navigation between pages

## Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Vite** 4.4.0 - Build tool and dev server
- **React Router DOM** 6.14.0 - Client-side routing
- **React Icons** 4.10.0 - Icon library

### Backend (Optional)
- **Node.js + Express** - REST API
- **PostgreSQL** - Database
- **Axios** - HTTP client

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushsharma9047/car-showroom.git
   cd car-showroom
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
car-showroom/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── CarCard.jsx   # Individual car card component
│   │   ├── CarList.jsx   # Car listing grid
│   │   ├── SearchBar.jsx # Search functionality
│   │   └── FilterPanel.jsx # Filter controls
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page with listing and filters
│   │   ├── CarDetails.jsx # Individual car details page
│   │   └── NotFound.jsx  # 404 page
│   ├── styles/           # CSS stylesheets
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── CarList.css
│   │   ├── CarCard.css
│   │   ├── SearchBar.css
│   │   ├── FilterPanel.css
│   │   ├── CarDetails.css
│   │   ├── NotFound.css
│   │   └── variables.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features in Detail

### 1. Car Listing
- Displays all cars in an attractive card layout
- Shows car image, make, model, year, price, and specs
- Responsive grid that adapts to screen size

### 2. Search
- Real-time search as you type
- Search by car make or model
- Highlights matching results

### 3. Filters
- **Make Filter** - Filter cars by manufacturer
- **Year Filter** - Filter by year of manufacture
- **Price Filter** - Set min and max price range
- **Reset Filters** - Clear all filters with one click

### 4. Car Details
- Dedicated page for each car
- Full specifications display
- "Schedule Test Drive" and "Contact Seller" buttons
- Easy navigation back to listing

## API Integration (Future)

The project is set up to easily integrate with a backend API:

1. **Create a backend API** with Express.js
2. **Set up PostgreSQL database** with cars table
3. **Update components** to fetch data from API:
   ```javascript
   // Example:
   useEffect(() => {
     fetchCars().then(setCars);
   }, []);
   ```
4. **Proxy configuration** in `vite.config.js` handles API requests

## Customization

### Change Colors
Edit the color scheme in `src/styles/variables.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... */
}
```

### Add More Cars
Modify the `SAMPLE_CARS` array in `src/pages/Home.jsx`

### Update Styles
Edit individual CSS files in `src/styles/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Backend API integration with PostgreSQL
- [ ] User authentication and favorites
- [ ] Admin dashboard for inventory management
- [ ] Payment gateway for online booking
- [ ] Customer reviews and ratings
- [ ] Email notifications
- [ ] Advanced search filters

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, email support@carshowroom.com or open an issue on GitHub.

---

**Happy coding! 🚀**
