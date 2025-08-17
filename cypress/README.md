# **Cypress Test Suite - QACommerce**

> **HTML Reports Available** | **Mochawesome Integration** | **CI/CD Ready**

## **How to Run the Project**

### **1. Install Dependencies:**
```bash
npm install
```

### **2. Application Setup:**
```bash
# No server needed! Tests run directly on index.html file
# Application opens automatically with file:// protocol
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

## **Test Reports - Mochawesome Integration**

### **HTML Reports Available!**

This project generates **HTML test reports** using **Mochawesome**:

### **Generate Reports:**
```bash
# Run tests with HTML report generation
npm run test:report
```

### **View Reports:**
```bash
# Open the generated HTML report
cypress/reports/merged-report.html
```

### **CI/CD Integration:**
Reports are automatically generated in **GitHub Actions** and available as **downloadable artifacts**:

1. Go to: [GitHub Actions](https://github.com/camilagomo/camila-portifolio/actions)
2. Click on any test run
3. Download **"cypress-test-report"** artifact
4. Extract and open `merged-report.html`






