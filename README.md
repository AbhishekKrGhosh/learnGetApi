# Learn GET API 🚀

<div align="center">

![API Learning](https://img.shields.io/badge/API-Learning-brightgreen)
![Data Formats](https://img.shields.io/badge/Multiple-Data_Formats-blue)
![Difficulty](https://img.shields.io/badge/Beginner_to-Advanced-orange)

</div>

## 📋 Overview

This project provides a series of endpoints designed to help developers learn how to fetch and render data from APIs in different formats. Each level introduces progressively more complex data structures, allowing learners to build their skills step by step.

## 🎯 Purpose

The main goal of this project is to provide a practical resource for learning how to:

- Make GET requests to REST APIs
- Handle different data formats and structures
- Parse and render increasingly complex data
- Build applications that consume API data effectively

## 🧩 API Endpoints

The project offers 7 levels of API endpoints, each returning data in different formats and complexity:

### Level 1: Simple Array
**Endpoint:** [https://learngetapi.onrender.com/api/array](https://learngetapi.onrender.com/api/array)

Basic array of values - perfect for beginners to practice rendering lists.

### Level 2: Simple Object
**Endpoint:** [https://learngetapi.onrender.com/api/object](https://learngetapi.onrender.com/api/object)

Single object with key-value pairs - learn how to access object properties.

### Level 3: Array of Objects
**Endpoint:** [https://learngetapi.onrender.com/api/employees](https://learngetapi.onrender.com/api/employees)

Collection of employee objects - practice rendering tabular data.

### Level 4: Mixed Data Types
**Endpoint:** [https://learngetapi.onrender.com/api/mixed](https://learngetapi.onrender.com/api/mixed)

Mixed data types in a single response - learn to handle different types of data.

### Level 5: Categorized Data
**Endpoint:** [https://learngetapi.onrender.com/api/languages](https://learngetapi.onrender.com/api/languages)

Programming languages organized by categories - practice rendering grouped data.

### Level 6: Complex Objects
**Endpoint:** [https://learngetapi.onrender.com/api/complex-languages](https://learngetapi.onrender.com/api/complex-languages)

Complex objects with multiple properties - learn to navigate and display complex data structures.

### Level 7: Nested Data
**Endpoint:** [https://learngetapi.onrender.com/api/nested-languages](https://learngetapi.onrender.com/api/nested-languages)

Deeply nested data structures - master handling hierarchical data.

## 🚀 Getting Started

### Example Usage

```javascript
// Using fetch API
fetch('https://learngetapi.onrender.com/api/array')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using async/await
async function fetchData() {
  try {
    const response = await fetch('https://learngetapi.onrender.com/api/object');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 💡 Learning Progression

For the best learning experience, follow these steps:

1. Start with Level 1 and practice rendering a simple array
2. Move to Level 2 to learn how to display object properties
3. Progress through each level, building more complex UI components
4. By Level 7, you should be comfortable handling any API data structure

## 🛠️ Suggested Projects

Here are some project ideas to practice with these endpoints:

- Create a simple list component with Level 1
- Build a profile card with Level 2
- Develop an employee directory with Level 3
- Design a dashboard with mixed data from Level 4
- Build a categorized catalog with Level 5
- Create detailed information pages with Level 6
- Build an organizational chart or file system explorer with expandable/collapsible nodes with Level 7

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contribution

Feel free to contribute to this project by adding more example endpoints or improving documentation.

---

<div align="center">

**Happy Coding! 🎉**

</div>
