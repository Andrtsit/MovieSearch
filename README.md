# MovieSearch 🎬

A modern movie search application built with React and powered by the OMDB API. Search for your favorite movies, view detailed information, and explore film collections with a clean, responsive interface.

## ✨ Features

- **Real-time Movie Search**: Search movies by title with instant results
- **Modal Movie Details**: Click any movie to view detailed information in an elegant modal popup
- **Responsive Grid Layout**: Clean grid display that adapts to different screen sizes
- **Error Handling**: Robust error handling for API failures and missing images
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **Clean UI**: Modern dark theme with vanilla CSS for optimal performance

## 🚀 Live Demo

[View Live Application](https://andrtsit.github.io/MovieSearch/)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **State Management**: Context API
- **Styling**: Vanilla CSS with modern dark theme and responsive grid layouts
- **API**: OMDB API (Open Movie Database)
- **Deployment**: GitHub Pages with automated deployment workflows

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Andrtsit/MovieSearch.git
   cd MovieSearch
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173`

## 🚀 Deployment

The deployment is handled through GitHub Actions workflow in `.github/workflows/`.

## 📁 Project Structure

```
MovieSearch/
├── .github/
│   └── workflows/
├── public/
│   └── 404.jpg (fallback image)
├── src/
│   ├── components/
│   │   ├── AppContext.jsx     # Context API for state management
│   │   ├── Button.jsx         # Reusable button component
│   │   ├── Footer.jsx         # Application footer
│   │   ├── Header.jsx         # Application header with search
│   │   ├── List.jsx          # Movie list display component
│   │   ├── Modal.jsx         # Movie details modal
│   │   └── MovieCard.jsx     # Individual movie card component
│   ├── utils/
│   │   ├── Api.jsx           # OMDB API integration
│   │   ├── getMovieDetails.js # Fetch individual movie details
│   │   ├── getMovies.js      # Fetch movie search results
│   │   └── getSeries.js      # Series-specific API calls
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx            # Application entry point
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Usage

1. **Search Movies**: Use the search functionality in the header to find movies by title
2. **Browse Results**: View movies in a responsive grid layout with poster images
3. **View Details**: Click on any movie card to open a detailed modal with:
   - Movie poster and title
   - Director and genre information
   - Plot summary and additional details
   - Ratings and release information
4. **Close Modal**: Click the close button or outside the modal to return to results
5. **Error Handling**: The app gracefully handles missing posters and API errors

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Get in Touch

* ✉️  Email: [andrtsit@gmail.com](mailto:andrtsit@gmail.com)
* 🔗  LinkedIn: [https://www.linkedin.com/in/andreas-tsitroulis-436465221/](https://www.linkedin.com/in/andreas-tsitroulis-436465221/)

---

⭐ Star this repo if you found it helpful!
