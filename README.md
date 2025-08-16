# QACommerce - Academic Portfolio

This repository is part of an **academic portfolio** developed during **Julio de Lima's Mentorship 2.0**, focused on **Software Quality Assurance (QA)**.  

The project simulates a complete e-commerce with shopping cart, coupons and promotions, being used to practice requirements gathering, test planning, test case execution, defect tracking and test automation.

---

## 🎯 **About the Project**

**QACommerce** is an e-commerce web application developed specifically to demonstrate Quality Assurance competencies, including:

- ✅ **Functional application** with complete shopping cart
- ✅ **Coupon system** and automatic promotions  
- ✅ **Responsive interface** for desktop, tablet and mobile
- ✅ **Admin panel** for promotions management
- ✅ **Intentional bugs** to demonstrate detection skills
- ✅ **Complete automation** with Cypress

---

## 🛠️ **Technologies Used**

### **Frontend:**
- **HTML5** - Semantic application structure
- **CSS3** - Responsive and modern styling
- **JavaScript ES6+** - Business logic and interactivity

### **Test Automation:**
- **Cypress** - E2E automation framework
- **GitHub Actions** - CI/CD pipeline for automatic execution

### **Storage:**
- **In-Memory** - All data is stored in JavaScript arrays/objects
- **No database** - Pure frontend application for demonstration

---

## 📋 **Implemented Features**

### **🛒 Shopping Cart:**
- Add, remove and update products
- Automatic calculation of totals and subtotals
- Quantity validation
- Empty state with guidance messages

### **🎫 Coupon System:**
- Apply and remove coupons
- Minimum value validation
- Different discount types (percentage/fixed)
- Visual status feedback

### **🎯 Automatic Promotions:**
- Automatic application based on rules
- Multiple discount types
- Combination with coupons
- Admin panel for creation

### **📱 Responsive Interface:**
- Adaptive layout for different screens
- Mobile-optimized navigation
- Touch-friendly buttons
- Responsive product grid

---

## 🐛 **Intentional Bugs (For Demonstration)**

The project includes purposefully implemented bugs to demonstrate defect detection and documentation skills:

### **🔗 GitHub Issues:**
- **[DEFECT #001: Coupon Validation Bypass](https://github.com/camilagomo/camila-portifolio/issues/3)**  
  *Coupons are accepted even below the required minimum value*

- **[DEFECT #002: Cart Total Calculation Error](https://github.com/camilagomo/camila-portifolio/issues/4)**  
  *Incorrect total calculation when there are multiple different products*

---

## 📚 **QA Documentation**

### **Test Plans and Cases:**
- **📋 Test Plan** - `tests/test-plan.md` (Based on ISO 29119-3)
- **🧪 Test Cases** - `tests/test-cases.md` (10 critical cases for automation)
- **📊 Requirements** - `tests/requirements.md` (Detailed requirements analysis)

### **Cypress Automation:**
- **🔥 Smoke Tests** - Critical functionalities
- **🔄 Regression Tests** - Comprehensive coverage including responsiveness
- **🐛 Bug Validation** - Automatic detection of intentional defects
- **📱 Responsive Tests** - Validation across multiple viewports

---

## 🚀 **How to Run the Project**

### **1. Install Dependencies:**
```bash
npm install
```

### **2. Start Application:**
```bash
npm run serve
# Application available at http://localhost:3000
```

### **3. Run Automated Tests:**
```bash
# All tests
npm run test:all

# Specific tests
npm run test:smoke        # Critical functionalities
npm run test:regression   # Complete coverage
npm run test:responsive   # Responsiveness
npm run test:bugs         # Defect validation
```

### **4. Interactive Mode (Cypress):**
```bash
npm run cypress:open
```

---

## 🎓 **Demonstrated Competencies**

### **Quality Assurance:**
- ✅ Requirements gathering and analysis
- ✅ Test planning (ISO 29119-3)
- ✅ Test case design
- ✅ Defect detection and documentation
- ✅ Traceability between requirements and tests

### **Test Automation:**
- ✅ Cypress Framework (E2E Testing)
- ✅ Page Object Model
- ✅ Custom commands
- ✅ Responsiveness testing
- ✅ CI/CD with GitHub Actions

### **Web Development:**
- ✅ Semantic HTML5
- ✅ Responsive CSS3
- ✅ Modern JavaScript ES6+
- ✅ Debugging and troubleshooting

---

## 🏆 **Julio de Lima's Mentorship 2.0**

This project was developed as part of **Julio de Lima's Mentorship 2.0**, a program focused on:

- **Test Modeling, Documentation and Execution**
- **Defect management tools**
- **Test automation with Cypress**
- **Quality Assurance best practices**
- **Preparation for the QA job market**

---

## 📊 **Project Metrics**

- **📁 Structure:** 15+ organized files
- **🧪 Tests:** 25+ automated test cases  
- **🐛 Defects:** 2 documented bugs with evidence
- **📱 Responsiveness:** 3 tested breakpoints
- **⚡ CI/CD:** Automated pipeline on GitHub Actions
- **📋 Coverage:** Smoke, Regression, Bug Validation and Responsive

---

## 📅 **Delivery Date**  
**August 2024**

