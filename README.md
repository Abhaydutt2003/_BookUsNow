# BookUsNow

## Getting Started

To set up and run the project, follow these steps:

1. **Download the Repository:**

   - Download the ZIP file or clone the repository using the following command:
     ```sh
     git clone <repository-url>
     ```

2. **Navigate to the Project Folder:**

   - Open your terminal and navigate to the folder where you downloaded or cloned the repository.

3. **Install Dependencies:**

   - Run the following command to install all necessary dependencies:
     ```sh
     npm install
     ```

4. **Configure API Base URL:**

   - Open the `api.js` file and set the `BASEURL` variable with the appropriate API base URL (up to the part ending in `...HeyQ==`):
     ```js
     const BASEURL = ""; // paste the URL only till (...HeyQ==)
     ```

5. **Start the Development Server:**
   - Run the following command to start the development server:
     ```sh
     npm run dev
     ```

## Project Overview

BookUsNow is a dynamic and scalable web application built with modern front-end technologies. The primary goal of this project is to provide an efficient and user-friendly interface for managing and browsing books.

### Technologies Used

- **React.js:** Chosen for its component-based architecture, which promotes code reusability and simplifies development.
- **Vite.js:** Used as the build tool and development server, offering fast bundling and hot module replacement.
- **SCSS:** Employed for writing efficient and maintainable CSS.
- **React Router DOM:** Enables easy navigation between different pages of the application, facilitating future expansion into a multi-page app.
- **Tanstack React Query:** Caches API requests to prevent unnecessary calls and enhance performance.
- **React Icons:** Provides a wide range of icons to improve the visual appeal of the application.
- **Axios:** Utilized for making API requests due to its ease of use and powerful features.

### Technical Decisions

#### React Router DOM for Navigation

React Router DOM was chosen to handle navigation within the application. Although the current version of BookUsNow is a single-page application, React Router DOM allows for seamless navigation and makes it easy to expand the application into a multi-page app in the future. It provides a declarative approach to routing, which helps in managing routes and the corresponding components in a structured manner. This ensures that the app remains organized and scalable as new features and pages are added.

#### Why Use Tanstack React Query?

Tanstack React Query was chosen for its powerful data-fetching capabilities and built-in caching mechanism. This library allows us to efficiently manage and cache API requests that are frequently used within the application. By caching these requests, we can significantly reduce redundant network calls, improve performance, and provide a smoother user experience. Additionally, React Query simplifies state management for asynchronous data fetching, making it easier to handle loading states, error states, and data synchronization.

#### SCSS for Efficient CSS

SCSS (Sass) is used for styling due to its advanced features like variables, nested rules, and mixins. These features enable us to write more organized, maintainable, and reusable CSS, which is crucial for scaling the application.

#### Vite.js for Fast Development

Vite.js was selected as the build tool and development server because of its blazing-fast performance. It provides instant hot module replacement (HMR) and optimizes the development experience, allowing developers to see changes in real-time without lengthy build processes.

### Note

The provided API includes image links hosted on Google Drive. However, Chrome may block these images due to security policies, resulting in a `net::ERR_BLOCKED_BY_ORB` error. This error typically occurs due to Cross-Origin Resource Sharing (CORS) restrictions or other browser security mechanisms. Until additional backend access is provided, we have used random image links to demonstrate efficient image fetching within the application.
