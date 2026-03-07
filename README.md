# My Portfolio

A modern, interactive personal portfolio website built with React and Vite, featuring smooth animations, responsive design, and various sections to showcase professional experience, skills, projects, and certifications.

## Features

- **Home Section**: Introduction with typewriter effect animation
- **Professional Experience**: Detailed timeline of work experience
- **Skills**: Showcase of technical and professional skills
- **Projects**: Portfolio of completed projects with descriptions
- **Certifications**: Display of professional certifications and achievements
- **Contact Modal**: Easy-to-use contact form for visitor inquiries
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Smooth Animations**: Engaging transitions and animations powered by Framer Motion
- **Modern UI**: Built with Material-UI (MUI) components

## Tech Stack

- **React 19**: Modern UI library
- **Vite**: Fast development server and build tool
- **Framer Motion**: Advanced animations and transitions
- **Material-UI (MUI)**: Professional UI component library
- **Swiper**: Touch-enabled carousel for projects/content
- **React Icons**: Beautiful icon library
- **Typewriter Effect**: Animated text effects
- **ESLint**: Code quality and style enforcement

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot module reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── body/
│   │   ├── Home.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   └── PageCurtain.jsx
│   ├── header/
│   │   └── Navbar.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── modal/
│   │   └── ContactModal.jsx
│   └── card/
├── assets/
│   └── images/
├── App.jsx
└── main.jsx
```

## Customization

To customize this portfolio:

1. **Update your information**: Modify component data in respective section files
2. **Add your images**: Place images in `src/assets/images/`
3. **Adjust styling**: Edit `src/App.css` and component-specific styles
4. **Customize colors and themes**: Update MUI theme configuration in main components

## License

This project is open source and available under the MIT License.
